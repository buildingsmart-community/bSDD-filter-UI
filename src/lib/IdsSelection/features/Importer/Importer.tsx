import { FileInput } from '@mantine/core';
import { X2jOptions, XMLParser } from "fast-xml-parser";
import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useAppDispatch } from '../../../common/app/hooks';
import { setIds, clearIds } from '../../../common/slices/idsSlice';
import type { IdsClass } from "../../types/types";

function Importer() {
  const { t } = useTranslation();
  const dispatch = useAppDispatch();

  const [errorMessage, setErrorMessage] = useState<string | null>();
  const [file, setFile] = useState<File | null>();
  
  const readFileContents = (file : File) => {
    const stringOptions = [
      'specification', 'property', 'xs_enumeration'
    ]
    
    const options: X2jOptions = {
      ignoreAttributes: false,
      attributeNamePrefix : "_",
      transformTagName: (tagName) => tagName.replace(":", "_"),
      isArray: (name) => {
        return stringOptions.includes(name)
      }
    };

    const reader = new FileReader();
    const parser = new XMLParser(options);
    
    reader.onload = () => {
      if (typeof reader.result === 'string') {
        try{
          const ids = parser.parse(reader.result) as IdsClass;
          if(!ids.ids ||
             !ids.ids.info ||
            (!ids.ids.specifications || !ids.ids.specifications.specification || ids.ids.specifications.specification.length === 0) ||
            (!ids.ids.specifications.specification.every(spec => spec.applicability && spec.requirements))
          ){
            throw "Invalid IDS";
          }
          dispatch(setIds(ids));
        }
        catch(e){
          var errorMessage = t('idsComponent.importer.parsingFailed');
          setErrorMessage(errorMessage);
          console.error(errorMessage + ':', e);
        }
      }
    };
  
    reader.onerror = (error) => {
      var errorMessage = t('idsComponent.importer.readingFileFailed');
      setErrorMessage(errorMessage);
      console.error(errorMessage + ':', error);
    };
  
    reader.readAsText(file, 'UTF-8');
  };

  const handleFileChange = (selectedFile : File | null) => {
    if (selectedFile) {
      if(selectedFile.name.endsWith(".ids"))
      {
        setErrorMessage(null);
        setFile(selectedFile);
        readFileContents(selectedFile);
      }
      else{
        var errorMessage = t('idsComponent.importer.invalidFileType');
        setErrorMessage(errorMessage);
        dispatch(clearIds());
        setFile(null);
      }
    }
    else {
      setErrorMessage(null);
      dispatch(clearIds());
      setFile(null);
    }
  };

  return(
    <FileInput
        clearable
        onChange={handleFileChange}
        value={file}
        placeholder={t('idsComponent.importer.importFile')}
        accept=".ids"
        error={errorMessage}
      />
  );
}

export default Importer;
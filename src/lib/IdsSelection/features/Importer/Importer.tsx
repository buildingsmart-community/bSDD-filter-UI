import { FileInput } from '@mantine/core';
import { X2jOptions, XMLParser } from "fast-xml-parser";
import { useState } from 'react';
import { useAppDispatch } from '../../../common/app/hooks';
import { setIds, clearIds } from '../../../common/slices/idsSlice';
import type { IdsClass } from "../../types/types";

function Importer() {
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
        const ids = parser.parse(reader.result) as IdsClass;
        dispatch(setIds(ids));
      }
    };
  
    reader.onerror = (error) => {
      console.error('Error reading file:', error);
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
        setErrorMessage("Invalid file selected. File should have '.ids' extension.");
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
        placeholder="Importeer bestand"
        accept=".ids"
        error={errorMessage}
      />
  );
}

export default Importer;
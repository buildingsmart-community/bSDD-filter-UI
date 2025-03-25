import { FileInput,  } from '@mantine/core';
import { useAppDispatch, useAppSelector } from '../../../common/app/hooks';
import { setFile, clearFile } from '../../../common/slices/idsSlice';
import { useState } from 'react';

function Importer() {
  const dispatch = useAppDispatch();

  const [errorMessage, setErrorMessage] = useState("");
  
  const file = useAppSelector((state) => state.ids.idsFile);

  const handleFileChange = (selectedFile : File | null) => {
    // selectedFile will be a File object (or an array if multiple is true)
    if (selectedFile) {
      if(selectedFile.name.endsWith(".ids"))
      {
        setErrorMessage("");
        dispatch(setFile(selectedFile));
      }
      else{
        setErrorMessage("Invalid file selected. File should have '.ids' extension.");
      }
    }
    else {
      dispatch(clearFile());
    }
  };

  return(
    <div>
      <FileInput
          clearable
          onChange={handleFileChange}
          value={file}
          placeholder="Importeer bestand"
          accept=".ids"
          error={errorMessage}
        />
    </div>
  );
}

export default Importer;
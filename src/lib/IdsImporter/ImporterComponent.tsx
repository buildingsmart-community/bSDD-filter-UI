import { useAppSelector } from '../common/app/hooks';
import Importer from './features/Importer/Importer';
import { useState } from 'react';

function ImporterComponent() {

  const [fileContents, setFileContents] = useState<string | null>(null);
  const file = useAppSelector((state) => state.ids.idsFile);

  const readFileContents = (file : File) => {
    const reader = new FileReader();
    
    // Set up a callback for when the file is successfully read
    reader.onload = () => {
      if (typeof reader.result === 'string') {
        setFileContents(reader.result);
      }
    };
  
    // Set up error handling
    reader.onerror = (error) => {
      console.error('Error reading file:', error);
    };
  
    // Read the file as text (you can also use readAsDataURL for images, etc.)
    reader.readAsText(file, 'UTF-8');
  };

  if(file !== null){
    readFileContents(file);
  }
  
  return (
    <div>
    <Importer/>
      {file && fileContents && (
        <div>{fileContents}</div>
      )}
    </div>
  );
}

export default ImporterComponent;

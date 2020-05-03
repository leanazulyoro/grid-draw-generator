import React, { useCallback } from 'react';
import {useDropzone} from 'react-dropzone'

const DropZone = ({children, onSuccess}) => {

  const onDrop = useCallback(acceptedFiles => {


    acceptedFiles.forEach((file) => {
      const reader = new FileReader;
      reader.onload = function() {
        onSuccess(reader.result);
      };
      if (file) {
        reader.readAsDataURL(file);
      } else {
        onSuccess('');
      }
    });

  }, []);
  const {getRootProps, getInputProps, isDragActive} = useDropzone({onDrop});

  return (
    <div {...getRootProps()}>
      <input {...getInputProps()} />
      {children}
      <p className="drop-here-text">Drop your image here! (or click and select)</p>
    </div>
  )

};

export default DropZone;

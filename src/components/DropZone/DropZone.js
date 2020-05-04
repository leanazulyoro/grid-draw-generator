import React, { useCallback } from 'react';
import {useDropzone} from 'react-dropzone';
import './DropZone.scss';

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
  const {getRootProps, getInputProps} = useDropzone({onDrop});

  return (
    <div className="drop-zone" {...getRootProps()}>
      <input {...getInputProps()} />
      {children}
      <p className="drop-here-text">Drop your image here!</p>
    </div>
  )

};

export default DropZone;

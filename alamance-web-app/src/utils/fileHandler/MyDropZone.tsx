import React, {useCallback, useState} from 'react'
import {useDropzone} from 'react-dropzone'

function MyDropZone() {
  const [fileList, setFileList] = useState<Array<File>>([]);
  const onDrop = useCallback(acceptedFiles => {
    setFileList(acceptedFiles)
  }, [])

  console.log(fileList[0])

  const {getRootProps, getInputProps, isDragActive} =  useDropzone({onDrop})

  return(
    <div {...getRootProps()}>
      <input {...getInputProps()} />
      {
        isDragActive ?
        <p>Drop your files here...</p> :
        <p>Drag 'n' Drop some files here, or click to select files.</p>
      }
    </div>
  )
}

export default MyDropZone;



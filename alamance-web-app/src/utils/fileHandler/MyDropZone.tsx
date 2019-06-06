import React, { useCallback, useState } from 'react'
import {paDeficitRequest} from '../pallasRequests/paDeficitRequest'
import {fileUpload} from './fileUpload'
import {useDropzone} from 'react-dropzone'

function MyDropZone() {
  const [fileNames, setFileNames] = useState<Array<string>>([])
  const onDrop = useCallback(acceptedFiles => {
    fileUpload(paDeficitRequest, acceptedFiles[0]).then(body => setFileNames(fileNames => fileNames.concat(body.name)))
  }, [])


  const {getRootProps, getInputProps, isDragActive} =  useDropzone({onDrop})

  return(
    <div>
      <div {...getRootProps()}>
        <input {...getInputProps()} />
        {
          isDragActive ?
          <p>Drop your files here...</p> :
          <p>Drag 'n' Drop some files here, or click to select files.</p>
        }
      </div>
      <a href={`${paDeficitRequest}/${fileNames[0]}`}>
        download
      </a>
      <p>{fileNames}</p>
    </div>
  )
}

export default MyDropZone;



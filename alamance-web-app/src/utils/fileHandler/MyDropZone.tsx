import React, { useCallback, useState } from 'react'
import { PaContainer } from './PaContainer'
import {paDeficitRequest} from '../pallasRequests/paDeficitRequest'
import {fileUpload} from './fileUpload'
import {useDropzone} from 'react-dropzone'

function MyDropZone() {
  const [allFileNames, setAllFileNames] = useState<Array<string>>([])
  const [upFiles, setUpFiles] = useState<Array<File>>([])

  const onDrop = useCallback(acceptedFiles => {
    setUpFiles(upFiles => upFiles.concat(acceptedFiles))
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
      {upFiles.length ?
       upFiles.map((upFile, index) => {
         return(
           <PaContainer
             fileToProcess={upFile}
             setAllFileNames={setAllFileNames}
             allFileNames={allFileNames}
             key={index}
           />
         )
       })
      : null
      }
    </div>

  )
}

export default MyDropZone;



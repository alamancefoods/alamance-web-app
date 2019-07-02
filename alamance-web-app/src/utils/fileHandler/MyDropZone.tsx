import React, { useCallback, useState } from 'react'
import { PaContainer } from './PaContainer'
import {useDropzone} from 'react-dropzone'

function MyDropZone() {
  const [allFileNames, setAllFileNames] = useState<Array<string>>([])
  const [upFiles, setUpFiles] = useState<Array<File>>([])

  const onDrop = useCallback(acceptedFiles => {
    setUpFiles(upFiles => upFiles.concat(acceptedFiles))
  }, [])


  const {getRootProps, getInputProps, isDragActive} =  useDropzone({onDrop})


  const dateExtractor = (input: string) => {
    const dotDateRe = /\d+\.\d+\.\d+/
    let myMatch: RegExpMatchArray | null
    while((myMatch = input.match(dotDateRe)) != null){
      const datePull = myMatch[0]
      const utcDate = Date.parse(datePull)
      const baseDate = new Date(utcDate)
      const dateOptions = {
        weekday: 'long',
        year: 'numeric',
        day: 'numeric',
        month: 'long'
      }
      const intlDate = new Intl.DateTimeFormat('en-US', dateOptions).format(baseDate)
      return intlDate
    }
  }


  return(
    <div>
    {!upFiles.length ?
     <div {...getRootProps()}>
       <input {...getInputProps()} />
       {
         isDragActive ?
         <p>Drop your files here...</p> :
         <p>Drag 'n' Drop some files here, or click to select files.</p>
       }
     </div>
      : null
    }
    {upFiles.length ?
     <div>
      <button onClick={() => setUpFiles(upFiles => upFiles = [] )}>Back</button>
      <h1>Gather Product Availability Deficits For:</h1>
     </div>
     : null
     }
    {upFiles.length ?
      upFiles.map((upFile, index) => {
        return(
          <div>
            <p>{dateExtractor(upFile.name)}</p>
            <PaContainer
              fileToProcess={upFile}
              setAllFileNames={setAllFileNames}
              allFileNames={allFileNames}
              key={index}
            />
          </div>
        )
      })
    : null
    }
    </div>

  )
}

export default MyDropZone;



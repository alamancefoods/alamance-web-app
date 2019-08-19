import React, { useCallback, useState } from 'react'
import { PaContainer } from './PaContainer'
import {useDropzone} from 'react-dropzone'

function MyDropZone() {
  const [allFileNames, setAllFileNames] = useState<Array<string>>([])
  const [upFiles, setUpFiles] = useState<Array<File>>([])
  const [isConfused, setConfusion] = useState(false)

  const onDrop = useCallback(acceptedFiles => {
    setUpFiles(upFiles => upFiles.concat(acceptedFiles))
  }, [])


  const {getRootProps, getInputProps, isDragActive} =  useDropzone({
    onDrop,
    accept: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet'
  })


  const dateExtractor = (input: string) => {
    return input
  }


  return(
    <div>
    {!upFiles.length ?
     <div {...getRootProps()}>
       <input {...getInputProps()} />
       {
         isDragActive ?
         <p>Drop your files here...</p> :
         <div>
          <h1>This is a Product Availability Parser</h1>
          <h2>Drag & Drop your files here</h2>
          <h2>Or click to select files.</h2>
          <h6>Only Submit 'xlsx' files. All other file types will be rejected.</h6>
         </div>
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
    {
   isConfused
   ? upFiles.length
   ? <div>
        <p>
          Now that you've submitted your files for processing, you need to enter some date ranges.
          If you want to determine product availability deficits 12 days out, enter '12' into the input field above.
          You can add additional values if you want to determine deficits for more ranges, after which you would click 'submit'.
          After clicking submit, sit tight and wait a few seconds for the processed files to become available for download.
          If the download links don't appear, reach out to 'hunter.templeman@alamancefoods.com'
        </p>
      <button onClick={() => setConfusion(false)}>I'm not confused...</button>
     </div>
   : <div>
      <p>
        to submit files for processing, either click on the dropzone above or drag a file of your choosing into the dropzone.
        Only 'xlsx' files will be accepted.
      </p>
      <button onClick={() => setConfusion(false)}>I'm not confused...</button>
    </div>
   : <button onClick={() => setConfusion(true)}>I'm confused...</button>
    }
    </div>
  )
}

export default MyDropZone;



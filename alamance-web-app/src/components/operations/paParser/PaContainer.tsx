import React, { useState } from 'react'
import { PaForm } from './PaForm'
import { paDeficitRequest } from '../../../utils/pallasRequests/paDeficitRequest'
import { fileUpload } from './fileUpload'
import { useKeycloak } from 'react-keycloak';

export const PaContainer = (
  { fileToProcess, setAllFileNames, allFileNames }
  :{
     fileToProcess: File,
     setAllFileNames: React.Dispatch<React.SetStateAction<string[]>>,
     allFileNames: string[]
  }
) => {
  const [timeDeltas, setTimeDeltas] = useState<Array<number>>([])
  const [downFileNames, setDownFileNames] = useState<Array<string>>([])
  const [formIndices, updateFormIndices] = useState([1])
  const [isLoading, setIsLoading] = useState(false)
  const [isDownloaded, setIsDownloaded] = useState(false)
  const [keycloak] = useKeycloak()


  const FormList = ({indices} : {indices: number[]}) => {
    const paForms = indices.map((formIndex) =>
      <PaForm
        setDeltas = {setTimeDeltas}
        deltas = {timeDeltas}
        index = {formIndex}
      />
    )
    return (
      <div>{paForms}</div>
    )
  }

  const DownloadList = ({files} : {files: string[]}) => {
    const downloadList = files.map((fileName) =>
      <div>
        <a href = {paDeficitRequest.concat(`/${fileName}`)}>{fileName}</a>
      </div>
    )
    return(
      <div>{downloadList}</div>
    )
  }

  const handleUpload = () => {
    setIsDownloaded(isDownloaded => !isDownloaded)
    setIsLoading(isloading => !isLoading)
    let request: string = paDeficitRequest
    switch(timeDeltas.length) {
      case 0:
        break;
      case 1:
        request = paDeficitRequest.concat(`?delta=${timeDeltas[0]}`)
        break;
      default:
        request =paDeficitRequest.concat(`?delta=${timeDeltas[0]}`)
        timeDeltas.slice(1).forEach(function(delta){
          request = request.concat(`&delta=${delta}`)
        });
    }
    fileUpload(request, fileToProcess, keycloak)
      .then(body => {
        setDownFileNames(downFileNames => downFileNames.concat(body.names))
        setIsLoading(false)
      })
  }


  return(
    <div>
      {timeDeltas.length > 0
      ? <h4>Submitted Date Ranges</h4>
      : null}
      <FormList indices={formIndices}/>
      {downFileNames.length > 0
      ? <div><h4>Download:</h4><DownloadList files={downFileNames}/></div>
      : isLoading
      ? <h5>loading...</h5>
      : null
      }
      {formIndices.length === timeDeltas.length && !isDownloaded
       ?<button
          onClick={() =>
          updateFormIndices(formIndices =>
          formIndices.concat(formIndices.slice(-1)[0] + 1))}>
          Add Another Range
        </button>
       : null
      }
      {!isDownloaded
      ?<button onClick={handleUpload}>Process Files</button>
      : null
      }
    </div>
  )
}

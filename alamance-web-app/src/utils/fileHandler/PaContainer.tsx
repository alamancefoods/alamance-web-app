import React, { useState } from 'react'
import { DeltaInput } from './DeltaInput'
import { paDeficitRequest } from '../pallasRequests/paDeficitRequest'
import { fileUpload } from './fileUpload'

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
  const [formArray, pushToFormArray] = useState([<DeltaInput
                                                   index={1}
                                                   timeDeltas={timeDeltas}
                                                   setTimeDeltas={setTimeDeltas}
                                                   downFileNames={downFileNames}
  />])
  const [formCount, updateFormCount] = useState(1)


  const formPusher = () => {
    updateFormCount(formCount + 1)
    const index: number = formCount
    pushToFormArray(formArray => formArray.concat(<DeltaInput
                                                    index={index}
                                                    timeDeltas={timeDeltas}
                                                    setTimeDeltas={setTimeDeltas}
                                                    downFileNames={downFileNames}
    />))
    console.log(formCount)
    console.log(timeDeltas.length)
  }

  const handleUpload = () => {
    switch(timeDeltas.length) {
      case 0:
        break;
      case 1:
        paDeficitRequest.concat(`?delta=${timeDeltas[0]}`)
        break;
      default:
        paDeficitRequest.concat(`?delta=${timeDeltas[0]}`)
        timeDeltas.slice(1).forEach(function(delta){
          paDeficitRequest.concat(`&delta=${delta}`)
        });
    }
    fileUpload(paDeficitRequest, fileToProcess)
      .then(body => setDownFileNames(names => downFileNames.concat(body.names)))
    setAllFileNames(names => allFileNames.concat(downFileNames))
  }


  return(
    <div>
      {formArray}
      {formCount === timeDeltas.length ?
       <button onClick={formPusher}>Would you like to make another forecast?</button> :
       null
      }
      <button onClick={handleUpload}
      >Process Files</button>
    </div>
  )
}

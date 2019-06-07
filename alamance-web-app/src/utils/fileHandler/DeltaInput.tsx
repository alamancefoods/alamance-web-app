import React from 'react'
import { paDeficitRequest } from '../pallasRequests/paDeficitRequest'
import { PaForm } from './PaForm'



export const DeltaInput = (
  { index, setTimeDeltas, downFileNames }
  :{
    index: number,
    setTimeDeltas: React.Dispatch<React.SetStateAction<number[]>>,
    downFileNames: string[]
  }
) => (
    <div>
      <PaForm setDeltas={setTimeDeltas} />
      {downFileNames.length ?
      <a href={`${paDeficitRequest}/${downFileNames[index]}`}>
        Download {downFileNames[index - 1]}
      </a>
      : null}
    </div>
  )

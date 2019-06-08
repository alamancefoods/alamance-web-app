import React from 'react'
import { paDeficitRequest } from '../pallasRequests/paDeficitRequest'
import { PaForm } from './PaForm'



export const DeltaInput = (
  { index, timeDeltas, setTimeDeltas, downFileNames }
  :{
    index: number,
    timeDeltas: number[],
    setTimeDeltas: React.Dispatch<React.SetStateAction<number[]>>,
    downFileNames: string[]
  }
) => (
    <div>
      <PaForm setDeltas={setTimeDeltas} deltas={timeDeltas} />
      {downFileNames.length ?
      <a href={`${paDeficitRequest}/${downFileNames[index]}`}>
        Download {downFileNames[index - 1]}
      </a>
      : null}
    </div>
  )

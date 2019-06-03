import React from 'react';
import { useFetch } from "../../hooks/fetchHooks"
import { itemListRequest } from '../../../utils/tritonRequests/tritonListRequests'

const ItemListComponent = () => {
  const fetchObject = useFetch(itemListRequest)
  let data: any[] = fetchObject.data
  let loading: boolean = fetchObject.loading
  let tmp: any = data[0]

  const mappingFunction = (p: any) => p.number
  const itemNumbers: string[] = data.map(mappingFunction)

  const MyComp: any = (data) =  data.map((datum, index) => {
    return (
      <p key={`${datum.pk}`}>
        {datum.number}
      </p>
    )
  })

  console.log(data)
  console.log(loading)

  return (
    <div>
      {loading ? (
        "Loading..."
      ) : (
        <div>
          <MyComp/>
        </div>
      )
       }
    </div>
  )
}

export default ItemListComponent;

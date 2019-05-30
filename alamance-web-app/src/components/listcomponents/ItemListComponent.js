import React from 'react';
import { useFetch } from "../hooks/useFetch"
import { itemListRequest } from '../../utils/tritonListRequests'

const ItemListComponent = () => {
  const [data, loading] = useFetch(itemListRequest)
  console.log(data)
  console.log(loading)

  return (
    <div>
      {loading ? (
        "Loading..."
      ) : (
        <div>
          <h1>Hiya There!</h1>
          <h2>Item Number {data[0].number}</h2>
        </div>
      )
       }
    </div>
  )
}

export default ItemListComponent;

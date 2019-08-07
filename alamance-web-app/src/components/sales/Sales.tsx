import React, { useState } from 'react';
import { useFetch } from '../../utils/hooks/fetchHooks'
import { orderListRequest } from '../../utils/popshopRequests/orderListRequest'

const Sales= () => {
  const response = useFetch(orderListRequest.concat('?postalCode=38495'));

  return(
    <>
      <button onClick={() => console.log(response)}>Click Me!</button>
    </>
  )
}

export default Sales;

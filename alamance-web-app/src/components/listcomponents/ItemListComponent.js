import React, {useState, useEffect } from 'react';
import { itemListRequest } from '../../utils/tritonListRequests'

const ItemListComponent = () => {

  //useEffect(() => {
   // const result = itemListRequest
  //}, []);
  let itemList = []
  itemList = itemListRequest
  console.log(itemList)
  const itemNumberList = itemList.number.map((item) =>
    <li>{item.number}</li>
  )
    return (
      <ul>{itemNumberList}</ul>
    )
}

export default ItemListComponent;

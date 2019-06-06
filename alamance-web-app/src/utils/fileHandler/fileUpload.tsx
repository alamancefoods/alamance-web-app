import { useState, useEffect } from 'react';

export async function fizzleUpload(url: string, upFile: File) {
  let formData = new FormData();
  formData.append('file', upFile)
  const response: any = await fetch(url, {
    method: 'POST',
    body: formData,
  });
  const fileObject: {name: string} = await response.json();
  const name: string = fileObject.name
  return name
}


export const fileUpload = async (url: string, upFile: File): Promise<any> => {
  let formData = new FormData();
  formData.append('file', upFile)
  return await new Promise(resolve => {
    fetch(url, {
      method: 'POST',
      body: formData,
    })
      .then(response => response.json())
      .then(body => {
        resolve(body);
      });
  });
};

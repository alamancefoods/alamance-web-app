import { tritonURL }  from './rootURLs'

export const tritonRequest = (endpoint) => {
  let requestURI = tritonURL.concat(endpoint)

  return fetch(`${requestURI}`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    }
  })
    .then(function(response){
      return response.json()
    })
}



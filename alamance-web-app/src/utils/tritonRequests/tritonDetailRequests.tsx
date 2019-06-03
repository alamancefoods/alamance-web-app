import { tritonURL } from '../rootURLs'

export const itemDetailRequest = (pk: number) => {
  let endpoint = `/item/${pk}`
  let requestURI = tritonURL.concat(endpoint)
  return(
    requestURI
  )
}

export const employeeDetailRequest = (pk: number) => {
  let endpoint = `/employee/${pk}`
  let requestURI = tritonURL.concat(endpoint)
  return (
    requestURI
  )
}

export const ShiftDetailRequest = (pk: number) => {
  let endpoint = `/shift/${pk}`
  let requestURI = tritonURL.concat(endpoint)
  return (
    requestURI
  )
}

export const MachineDetailRequest = (pk: number) => {
  let endpoint = `/employee/${pk}`
  let requestURI = tritonURL.concat(endpoint)
  return (
    requestURI
  )
}

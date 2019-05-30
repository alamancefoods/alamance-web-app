import { tritonURL } from './rootURLS'

export const itemDetailRequest = (pk) => {
  let endpoint = `/item/${pk}`
  let requestURI = tritonURL.concat(endpoint)
  return(
    requestURI
  )
}

export const employeeDetailRequest = (pk) => {
  let endpoint = `/employee/${pk}`
  let requestURI = tritonURL.concat(endpoint)
  return (
    requestURI
  )
}

export const ShiftDetailRequest = (pk) => {
  let endpoint = `/shift/${pk}`
  let requestURI = tritonURL.concat(endpoint)
  return (
    requestURI
  )
}

export const MachineDetailRequest = (pk) => {
  let endpoint = `/employee/${pk}`
  let requestURI = tritonURL.concat(endpoint)
  return (
    requestURI
  )
}

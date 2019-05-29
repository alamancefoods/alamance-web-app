import { tritonRequest } from './baseRequests'

export const itemDetailRequest = (pk) => {
  return (
    tritonRequest(`/item/${pk}`)
  )
}

export const employeeDetailRequest = (pk) => {
  return (
    tritonRequest(`/employee/${pk}`)
  )
}

export const ShiftDetailRequest = (pk) => {
  return (
    tritonRequest(`/shift/${pk}`)
  )
}

export const MachineDetailRequest = (pk) => {
  return (
    tritonRequest(`/machine/${pk}`)
  )
}

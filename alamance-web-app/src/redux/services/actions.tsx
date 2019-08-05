import { PICK_SERVICE, ServiceActionTypes } from './types'


export function pickService(service: string): ServiceActionTypes{
  return {
    type: PICK_SERVICE,
    payload: service
  }
}

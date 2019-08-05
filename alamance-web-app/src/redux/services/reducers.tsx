import {
  ServiceState,
  ServiceActionTypes,
  PICK_SERVICE
} from './types'

const initialState: ServiceState = {
  service: "home"
}

export function serviceReducer(
  state = initialState,
  action: ServiceActionTypes
): ServiceState {
  switch (action.type) {
    case PICK_SERVICE:
      return {
        service: action.payload
      }
    default:
      return state
  }
}

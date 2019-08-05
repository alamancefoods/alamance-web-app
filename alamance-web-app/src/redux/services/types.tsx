export const PICK_SERVICE = 'PICK_SERVICE'

export interface ServiceState {
  service: string
}

interface PickServiceAction{
  type: typeof PICK_SERVICE
  payload: string
}

export type ServiceActionTypes = PickServiceAction;

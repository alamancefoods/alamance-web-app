export const ADD_ROLE = 'ADD_ROLE'

export interface Role {
 role: string
}

export interface RoleState {
  roles: string[]
}

interface AddRoleAction {
  type: typeof ADD_ROLE
  payload: string
}

export type RoleActionTypes = AddRoleAction

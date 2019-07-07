export const ADD_ROLE = 'ADD_ROLE'

export interface Role {
  role: string
}

export interface RoleState {
  roles: Role[]
}

interface AddRoleAction {
  type: typeof ADD_ROLE
  payload: Role
}

export type RoleActionTypes = AddRoleAction

import { ADD_ROLE, RoleActionTypes } from './types'

export function addRole(newRole: string): RoleActionTypes {
  return {
    type: ADD_ROLE,
    payload: newRole
  }
}

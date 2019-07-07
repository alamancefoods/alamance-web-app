import { Role, ADD_ROLE, RoleActionTypes } from './types'

export function addRole(newRole: Role): RoleActionTypes {
  return {
    type: ADD_ROLE,
    payload: newRole
  }
}

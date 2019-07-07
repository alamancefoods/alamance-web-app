import {
  Role,
  RoleState,
  RoleActionTypes,
  ADD_ROLE
} from './types'

const initialState: RoleState = {
  roles: []
}

export function roleReducer(
  state = initialState,
  action: RoleActionTypes
): RoleState {
  switch (action.type) {
    case ADD_ROLE:
      return {
        roles: [...state.roles, action.payload]
      }
  }
}

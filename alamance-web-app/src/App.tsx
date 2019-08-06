import React, { useEffect } from 'react';
import DashBoard from './components/materials/Dashboard'
import { useKeycloak } from 'react-keycloak';
import { useDispatch } from 'react-redux';
import { addRole } from './redux/roles/actions'

function App() {
  const [keycloak, initialized] = useKeycloak();
  const dispatch = useDispatch()
  const userRoles: any = ['admin', 'human resources', 'operations', 'sales', 'analytics']

  useEffect(() => {
    if(keycloak.realmAccess){
      for(let i = 0; i <= userRoles.length; i++){
        if(keycloak.realmAccess.roles.includes(userRoles[i])){
          dispatch(addRole(userRoles[i]))
        }
      }
    }
  }, [initialized, dispatch, keycloak.realmAccess, userRoles])


  return (
        <DashBoard />
  )
}

export default App;

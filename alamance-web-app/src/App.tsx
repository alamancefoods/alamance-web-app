import React, { useEffect } from 'react';
import DashBoard from './components/appTools/Dashboard'
import { useKeycloak } from 'react-keycloak';
import { useDispatch } from 'react-redux';
import { addRole } from './redux/roles/actions'
import { ROLE_ARRAY } from './constants/servicesAndRoles'

function App() {
  const [keycloak, initialized] = useKeycloak();
  const dispatch = useDispatch()

  useEffect(() => {
    if(keycloak.realmAccess){
      for(let i = 0; i <= ROLE_ARRAY.length; i++){
        if(keycloak.realmAccess.roles.includes(ROLE_ARRAY[i])){
          dispatch(addRole(ROLE_ARRAY[i]))
        }
      }
    }
  }, [initialized, dispatch, keycloak.realmAccess])


  return (
        <DashBoard />
  )
}

export default App;

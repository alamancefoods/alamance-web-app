import React, { useEffect } from 'react';
import DashBoard from './styles/Dashboard'
import { useKeycloak } from 'react-keycloak';
import { useDispatch, useStore, useSelector} from 'react-redux';
import { addRole } from './redux/roles/actions'

function App() {
  const [keycloak, initialized] = useKeycloak();
  const dispatch = useDispatch()
  const store = useStore()
  const roles = useSelector(state => state )
  const userRoles: any = ['admin', 'human resources', 'operations', 'sales', 'analytics']

  useEffect(() => {
    if(keycloak.realmAccess){
      for(let i = 0; i <= userRoles.length; i++){
        if(keycloak.realmAccess.roles.includes(userRoles[i])){
          dispatch(addRole(userRoles[i]))
        }
      }
    }
  }, [initialized])


  return (
        <DashBoard />
  )
}

export default App;

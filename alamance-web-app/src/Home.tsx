import React from 'react';
import MyDropZone from './utils/fileHandler/MyDropZone'
import { useKeycloak } from 'react-keycloak';
import { Base64 } from 'js-base64';

export const Home = () => {
  const [keycloak, initialized] = useKeycloak();
  return (

    <div>
      <div>
          <button onClick={() => fetch('http://afitest.net:8001/logout')}>kong logout</button>
         <button onClick={() => keycloak.logout()}>Logout</button>
         <button onClick={() => console.log(keycloak.realmAccess)}>Check Token</button>
      </div>
      <div>
        <MyDropZone/ >
      </div>
    </div>
  )

}

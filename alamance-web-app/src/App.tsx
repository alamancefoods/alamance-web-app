import React, { useEffect } from 'react';
import NewDash from './styles/NewDash'
import { Home }from './Home'
import Keycloak from 'keycloak-js';
import { KeycloakProvider } from 'react-keycloak';
const keycloak = (Keycloak as any)({
    "realm": "master",
    "clientId": "alamance-react-app",
    "url": "https://afiauth.net/auth",
    "ssl-required": "external",
    "resource": "alamance-react-app",
    "public-client": true,
    "verify-token-audience": true,
    "use-resource-role-mappings": true,
    "confidential-port": 0
})



function App() {
  return (
    <KeycloakProvider
      keycloak={keycloak}
      initConfig={{
        onLoad: 'login-required'
      }}
    >
      <NewDash />
    </KeycloakProvider>
  )
}

export default App;

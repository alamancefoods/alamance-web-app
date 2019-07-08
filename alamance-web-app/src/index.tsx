import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import * as serviceWorker from './serviceWorker';
import Keycloak from 'keycloak-js';
import { KeycloakProvider } from 'react-keycloak';
import store from './redux/store';
import { Provider } from 'react-redux';

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

ReactDOM.render(<KeycloakProvider
                  keycloak={keycloak}
                  initConfig={{
                    onLoad: 'login-required'
                  }}><Provider store={store}>
                    <App />
                  </Provider>
                </KeycloakProvider>,
                document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

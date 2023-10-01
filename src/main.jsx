import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import { Auth0Provider } from '@auth0/auth0-react';


const domain = 'dev-v6oinruanic8adgg.us.auth0.com';
const clientId = 'FaPDOVPtYaKqz5KWWIhI7G8Dg5a53Rzz';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Auth0Provider
        domain={domain}
        clientId={clientId}
        authorizationParams={{
          redirect_uri: window.location.origin
        }}
      >
      <App />
    </Auth0Provider>
  </React.StrictMode>
)

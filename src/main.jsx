import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import { Auth0Provider } from '@auth0/auth0-react';
import { getConfig } from './config';

const config = getConfig();

const domain = "dev-v6oinruanic8adgg.us.auth0.com";
const clientId = "FaPDOVPtYaKqz5KWWIhI7G8Dg5a53Rzz";

ReactDOM.createRoot(document.getElementById('root')).render(
    <Auth0Provider
        domain={domain}
        clientId={clientId}
        authorizationParams={{
          redirect_uri: window.location.origin + "/feed",
          ...(config.audience ? { audience: config.audience } : null),
        }}
      >
      <App />
    </Auth0Provider>
)

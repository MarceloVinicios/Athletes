import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './pages/App'
import { Auth0Provider } from '@auth0/auth0-react';


const domain = 'dev-41qajw3ehs0m7xmi.us.auth0.com';
const clientId = 'FlhA6mo0PVovqqREnUcYP2J78gUUBaX6';

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

import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import { Auth0Provider } from "@auth0/auth0-react";
const domainEnv = import.meta.env.VITE_AUTH0_DOMAIN;
const clientIdEnv = import.meta.env.VITE_AUTH0_CLIENT_ID;
const audienceEnv = import.meta.env.VITE_AUTH0_AUDIENCE;

const rootElement = document.getElementById("root")!;
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <Auth0Provider
      domain={domainEnv}
      clientId={clientIdEnv}
      authorizationParams={{
        redirect_uri: window.location.origin,
        audience: audienceEnv,
      }}
    >
      <App />
    </Auth0Provider>
  </StrictMode>,
);

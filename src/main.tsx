import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import { Auth0Provider } from "@auth0/auth0-react";

// Vi hårdkodar värdena precis just nu bara för att se att det hoppar igång
createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Auth0Provider
      domain="dev-jnlbp5hqfmbs1xp1.us.auth0.com"
      clientId="N5J0tqX3JpdJ8t5hxrUhHKHN8EiWLxEV"
      authorizationParams={{
        redirect_uri: window.location.origin,
        audience: "https://willis-api/", // Denna rad aktiverar "nyckeln" till backenden
      }}
    >
      <App />
    </Auth0Provider>
  </StrictMode>,
);

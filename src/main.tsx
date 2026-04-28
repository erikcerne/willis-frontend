import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query"; //
import { Auth0Provider } from "@auth0/auth0-react";
import App from "./App.tsx";
import "./index.css";

const queryClient = new QueryClient();

const domainEnv = import.meta.env.VITE_AUTH0_DOMAIN;
const clientIdEnv = import.meta.env.VITE_AUTH0_CLIENT_ID;
const audienceEnv = import.meta.env.VITE_AUTH0_AUDIENCE;

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <QueryClientProvider client={queryClient}>
      <Auth0Provider
        domain={domainEnv}
        clientId={clientIdEnv}
        authorizationParams={{
          redirect_uri: window.location.origin,
          audience: audienceEnv,
          scope: "openid profile email",
        }}
      >
        <App />
      </Auth0Provider>
    </QueryClientProvider>
  </StrictMode>,
);

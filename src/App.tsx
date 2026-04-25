import { useAuth0 } from "@auth0/auth0-react";

function App() {
  const { isLoading, isAuthenticated, error, loginWithRedirect, logout, user } =
    useAuth0();

  if (isLoading) return <div>Laddar...</div>;

  return (
    <div style={{ padding: "20px" }}>
      {isAuthenticated && user ? (
        <div>
          <p>Inloggad som: {user.email}</p>
          <h1>Användarprofil</h1>
          <pre>{JSON.stringify(user, null, 2)}</pre>
          <button
            onClick={() =>
              logout({ logoutParams: { returnTo: window.location.origin } })
            }
          >
            Logga ut
          </button>
        </div>
      ) : (
        <div>
          {error && <p style={{ color: "red" }}>Fel: {error.message}</p>}
          <button onClick={() => loginWithRedirect()}>Logga in</button>
          <button
            onClick={() =>
              loginWithRedirect({
                authorizationParams: { screen_hint: "signup" },
              })
            }
          >
            Skapa konto
          </button>
        </div>
      )}
    </div>
  );
}

export default App;

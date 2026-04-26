import { useAuth0 } from "@auth0/auth0-react";
import { useEffect } from "react";

function App() {
  const {
    isAuthenticated,
    loginWithRedirect,
    logout,
    user,
    getAccessTokenSilently,
    isLoading,
  } = useAuth0();

  useEffect(() => {
    const syncUser = async () => {
      if (isAuthenticated) {
        try {
          console.log("Försöker hämta token och synka användare...");
          const token = await getAccessTokenSilently();

          const response = await fetch(
            "http://localhost:8080/api/users/register",
            {
              method: "POST",
              headers: {
                Authorization: `Bearer ${token}`,
                "Content-Type": "application/json",
              },
            },
          );

          if (response.ok) {
            console.log("Användaren är nu registrerad/inloggad i databasen!");
          } else {
            console.error("Backenden svarade med felkod:", response.status);
          }
        } catch (error) {
          console.error("Synkning misslyckades:", error);
        }
      }
    };

    syncUser();
  }, [isAuthenticated, getAccessTokenSilently]);

  if (isLoading) {
    return (
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "100vh",
        }}
      >
        <div>Laddar Willis...</div>
      </div>
    );
  }

  if (!isAuthenticated) {
    return (
      <div
        style={{
          textAlign: "center",
          marginTop: "100px",
          fontFamily: "sans-serif",
        }}
      >
        <h1>Välkommen till Willis</h1>
        <p>Logga in för att hantera ditt skafferi och minska matsvinn</p>
        <button
          onClick={() => loginWithRedirect()}
          style={{ padding: "10px 20px", fontSize: "16px", cursor: "pointer" }}
        >
          Logga in eller Skapa konto
        </button>
      </div>
    );
  }

  return (
    <div style={{ fontFamily: "sans-serif", padding: "20px" }}>
      <nav
        style={{
          display: "flex",
          justifyContent: "space-between",
          borderBottom: "1px solid #ccc",
          paddingBottom: "10px",
        }}
      >
        <div>
          <strong>Willis Skafferi</strong>
        </div>
        <div>
          <span style={{ marginRight: "15px" }}>
            Inloggad som: {user?.name || user?.email}
          </span>
          <button
            onClick={() =>
              logout({ logoutParams: { returnTo: window.location.origin } })
            }
          >
            Logga ut
          </button>
        </div>
      </nav>

      <main style={{ marginTop: "20px" }}>
        <h1>Ditt Skafferi</h1>
        <div
          style={{
            backgroundColor: "#f9f9f9",
            padding: "20px",
            borderRadius: "8px",
          }}
        >
          <p>Här kommer dina matvaror att visas.</p>
          <p>
            Backend-ID (sub): <code>{user?.sub}</code>
          </p>
        </div>
      </main>
    </div>
  );
}

export default App;

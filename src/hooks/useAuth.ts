import { useAuth0 } from "@auth0/auth0-react";
import { useEffect } from "react";

const baseUrl = import.meta.env.VITE_API_BASE_URL;

export const useAuth = () => {
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
          const token = await getAccessTokenSilently();
          await fetch(`${baseUrl}/users/register`, {
            method: "POST",
            headers: {
              Authorization: `Bearer ${token}`,
              "Content-Type": "application/json",
            },
          });
          console.log("Användare synkad med backend");
        } catch (error) {
          console.error("Synkning misslyckades:", error);
        }
      }
    };

    syncUser();
  }, [isAuthenticated, getAccessTokenSilently]);

  return {
    isAuthenticated,
    login: loginWithRedirect,
    logout: () =>
      logout({ logoutParams: { returnTo: window.location.origin } }),
    user,
    isLoading,
    getAccessTokenSilently,
  };
};

import { createRootRoute, Outlet } from '@tanstack/react-router';
import { TanStackRouterDevtools } from '@tanstack/router-devtools';
import { useAuth } from '../hooks/useAuth';
import { Header } from '../components/Header';
import { Fotter } from '../components/Fotter';

export const Route = createRootRoute({
  component: function RootLayout() {
    const { isAuthenticated, login, isLoading } = useAuth();

    if (isLoading) return <div className="loading">Laddar...</div>;

    if (!isAuthenticated) {
      return <button onClick={() => login()}>Logga in</button>;
    }

    return (
      <>
        <Header />
        <hr />
        <main>
          <Outlet /> 
        </main>
        <Fotter />
        <TanStackRouterDevtools />
      </>
    );
  },
});

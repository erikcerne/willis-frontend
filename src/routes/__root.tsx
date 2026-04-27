import { createRootRoute, Outlet } from "@tanstack/react-router";
//import { TanStackRouterDevtools } from "@tanstack/react-router-devtools";

import { Header } from "../components/Header";
import { Footer } from "../components/Footer";

export const Route = createRootRoute({
  component: function RootLayout() {
    return (
      <div className="min-h-screen bg-base-300 flex justify-center">
        <div className="w-full max-w-[375px] h-screen bg-base-100 shadow-2xl flex flex-col overflow-hidden relative">
          <Header />
          
          <main className="flex-grow overflow-y-auto bg-white text-black p-4">
            <Outlet />
          </main>

          <Footer />
        </div>
      </div>
    );
  },
});
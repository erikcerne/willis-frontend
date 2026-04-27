// src/components/Header.tsx
import { useAuth } from "../hooks/useAuth"; // Justera sökvägen om det behövs

export const Header = () => {
  const { isAuthenticated, login, logout } = useAuth();

  return (
    // bg-willys-red och text-white för Willys-looken
    <div className="navbar bg-willys-red text-white shadow-sm min-h-16 px-4">
      {/* Vänster sida: Mock-profilknapp */}
      <div className="navbar-start">
        <button className="btn btn-ghost btn-circle text-white">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-7 w-7"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="1.5"
              d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
            />
          </svg>
        </button>
      </div>

      {/* Mitten: Titel "Hem" */}
      <div className="navbar-center">
        <h1 className="text-xl font-semibold text-white">Hem</h1>
      </div>

      {/* Höger sida: Logga in/ut */}
      <div className="navbar-end">
        {isAuthenticated ? (
          <button
            onClick={() => logout()}
            className="btn btn-ghost text-white text-sm"
          >
            Logga ut
          </button>
        ) : (
          <button
            onClick={() => login()}
            className="btn btn-ghost text-white text-sm"
          >
            Logga in
          </button>
        )}
      </div>
    </div>
  );
};

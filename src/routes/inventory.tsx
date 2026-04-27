import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { useQuery } from "@tanstack/react-query";
import { inventoryQuery } from "../features/inventory/api.ts";

export const Route = createFileRoute("/inventory")({
  component: Inventory,
});

// eslint-disable-next-line react-refresh/only-export-components
function Inventory() {
  const [activeFilter, setActiveFilter] = useState("alla");
  const { getAccessTokenSilently, isAuthenticated } = useAuth0();

  const { data: token } = useQuery({
    queryKey: ["auth-token"],
    queryFn: () => getAccessTokenSilently(),
    enabled: isAuthenticated,
  });

  const { data: categories, isLoading } = useQuery(inventoryQuery(token));

  if (isLoading) return <div>Laddar ditt lager...</div>;

  const filterButtons = [
    { id: "alla", label: "Alla" },
    { id: "farska", label: "Färska" },
    { id: "utgangna", label: "Kort datum" },
  ];

  return (
    <>
      {/* Debug-ruta: Visar endast om data finns */}
      {categories && categories.length > 0 && (
        <div className="bg-yellow-50 border-2 border-yellow-200 p-2 mb-4 text-[10px] rounded font-mono text-black">
          
          <p>{categories[0].name}</p>
          <p>{categories[0].inventoryItems[0]?.inventoryId}</p>
          <p>{categories[0].inventoryItems[0]?.quantity}</p>
        </div>
      )}

      <div className="flex flex-col gap-2 w-full max-w-md">
        <label className="input flex items-center gap-2 bg-white text-black border-[#e2001a] border-2 h-10 w-full focus-within:outline-none">
          <svg
            className="h-5 w-5 text-[#e2001a]"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
          >
            <g
              strokeLinejoin="round"
              strokeLinecap="round"
              strokeWidth="2.5"
              fill="none"
              stroke="currentColor"
            >
              <circle cx="11" cy="11" r="8"></circle>
              <path d="m21 21-4.3-4.3"></path>
            </g>
          </svg>
          <input
            type="search"
            className="grow placeholder:text-gray-400 text-sm"
            placeholder="Sök varor..."
          />
        </label>

        <div className="flex gap-1 w-full">
          {filterButtons.map((btn) => (
            <button
              key={btn.id}
              onClick={() => setActiveFilter(btn.id)}
              className={`
                btn flex-1 min-h-0 h-8 text-xs border-none transition-all
                ${
                  activeFilter === btn.id
                    ? "bg-[#e2001a] text-white shadow-inner scale-95"
                    : "bg-gray-200 text-gray-700 hover:bg-gray-300"
                }
                `}
            >
              {btn.label}
            </button>
          ))}
        </div>

        <div>
          {categories?.map((category) => (
            <div key={category.category}></div>
          ))}
        </div>
      </div>
    </>
  );
}

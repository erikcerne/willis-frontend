/* eslint-disable react-refresh/only-export-components */
import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { useQuery } from "@tanstack/react-query";
import { inventoryQuery, useAddToInventory, useClearExpiredItems } from "../features/inventory/api.ts";
import { ItemCard } from "../features/inventory/ItemCard.tsx";

export const Route = createFileRoute("/inventory")({
  component: Inventory,
});

function Inventory() {
  const [activeFilter, setActiveFilter] = useState("alla");
  const { getAccessTokenSilently, isAuthenticated } = useAuth0();

  const { data: token } = useQuery({
    queryKey: ["auth-token"],
    queryFn: () => getAccessTokenSilently(),
    enabled: isAuthenticated,
  });

  const { data: InventoryDto, isLoading } = useQuery(inventoryQuery(token!));
  const { mutate: addToInventory, isPending: isAdding } = useAddToInventory(token!);
  const { mutate: clearExpired, isPending: isClearing } = useClearExpiredItems(token!);

  const filterButtons = [
    { id: "alla", label: "Alla" },
    { id: "färska", label: "Färska" },
    { id: "utgångna", label: "Utgångna" },
  ];

  if (isLoading) return <div className="p-4 text-center text-sm font-bold">Laddar...</div>;

  return (
    <div className="flex flex-col gap-3 w-full max-w-md mx-auto pb-6">
      <label className="input flex items-center gap-2 bg-white text-black border-[#e2001a] border-2 h-9 w-full rounded-lg focus-within:outline-none">
        <svg className="h-4 w-4 text-[#e2001a]" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><g strokeLinejoin="round" strokeLinecap="round" strokeWidth="2.5" fill="none" stroke="currentColor"><circle cx="11" cy="11" r="8"></circle><path d="m21 21-4.3-4.3"></path></g></svg>
        <input type="search" className="grow placeholder:text-gray-400 text-xs" placeholder="Sök varor..." />
      </label>

      <div className="flex gap-1.5 w-full">
        {filterButtons.map((btn) => (
          <button
            key={btn.id}
            onClick={() => setActiveFilter(btn.id)}
            className={`btn flex-1 min-h-0 h-8 text-[10px] font-bold border-none transition-all rounded-md ${activeFilter === btn.id ? "bg-[#e2001a] text-white" : "bg-gray-100 text-gray-600"}`}
          >
            {btn.label}
          </button>
        ))}
        <button 
          onClick={() => addToInventory()} 
          disabled={isAdding}
          className="btn flex-1 min-h-0 h-8 text-[10px] font-bold border-none bg-gray-100 text-gray-600 rounded-md disabled:bg-gray-200"
        >
          {isAdding ? <span className="loading loading-spinner loading-xs"></span> : "Kvitto"}
        </button>
      </div>

      {activeFilter === "utgångna" && InventoryDto && InventoryDto.length > 0 && (
        <button 
          onClick={() => clearExpired()}
          disabled={isClearing}
          className="btn bg-[#e2001a] text-white hover:bg-red-700 w-full min-h-0 h-8 text-[10px] font-bold rounded-md border-none shadow-sm transition-colors disabled:bg-red-300"
        >
          {isClearing ? <span className="loading loading-spinner loading-xs"></span> : "Radera alla utgångna varor"}
        </button>
      )}

      <div className="flex flex-col">
        {isAuthenticated ? (
          InventoryDto?.map((dto, index) => (
            <ItemCard key={`${dto.name}-${index}`} inventoryDto={dto} token={token!} />
          ))
        ) : (
          <div className="text-center p-4 text-xs text-gray-500">Logga in för att se lager</div>
        )}
      </div>
    </div>
  );
}
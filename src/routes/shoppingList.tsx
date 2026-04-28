/* eslint-disable react-refresh/only-export-components */
import { useAuth0 } from "@auth0/auth0-react";
import { useQuery } from "@tanstack/react-query";
import { createFileRoute } from "@tanstack/react-router";
import { shoppingListQuery } from "../features/shopping-list/api";
import { ItemShopingList } from "../features/shopping-list/ItemShoping";

export const Route = createFileRoute("/shoppingList")({
  component: ShoppingList,
});

function ShoppingList() {
  const { getAccessTokenSilently, isAuthenticated } = useAuth0();

  const { data: token } = useQuery({
    queryKey: ["auth-token"],
    queryFn: () => getAccessTokenSilently(),
    enabled: isAuthenticated,
  });

  const { data: shoppingList, isLoading } = useQuery(shoppingListQuery(token!));

  if (isLoading) return <div className="p-4 text-center text-sm font-bold">Laddar din inköpslista...</div>;

  return (
    <div className="flex flex-col gap-3 w-full max-w-md mx-auto pb-6">
      <label className="input flex items-center gap-2 bg-white text-black border-[#e2001a] border-2 h-9 w-full rounded-lg focus-within:outline-none">
        <svg className="h-4 w-4 text-[#e2001a]" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
          <g strokeLinejoin="round" strokeLinecap="round" strokeWidth="2.5" fill="none" stroke="currentColor">
            <circle cx="11" cy="11" r="8"></circle>
            <path d="m21 21-4.3-4.3"></path>
          </g>
        </svg>
        <input
          type="search"
          className="grow placeholder:text-gray-400 text-xs"
          placeholder="Sök varor..."
        />
      </label>

      <div className="flex flex-col mt-2">
        {isAuthenticated ? (
          shoppingList?.map((i) => (
            <ItemShopingList key={i.id} shoppingListDto={i} token={token!} />
          ))
        ) : (
          <div className="text-center p-4 text-xs text-gray-500">
            Logga in för att se din inköpslista
          </div>
        )}
      </div>
    </div>
  );
}
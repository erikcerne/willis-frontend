import { useAuth0 } from "@auth0/auth0-react";
import { useQuery } from "@tanstack/react-query";
import { createFileRoute } from "@tanstack/react-router";
import { shoppingListQuery } from "../features/shopping-list/api";
import { ItemShopingList } from "../features/shopping-list/ItemShoping";

export const Route = createFileRoute("/shoppingList")({
  component: ShoppingList,
});

// eslint-disable-next-line react-refresh/only-export-components
function ShoppingList() {
  const { getAccessTokenSilently, isAuthenticated } = useAuth0();

  const { data: token } = useQuery({
    queryKey: ["auth-token"],
    queryFn: () => getAccessTokenSilently(),
    enabled: isAuthenticated,
  });

  const { data: shoppingList, isLoading } = useQuery(shoppingListQuery(token!));

  if (isLoading) return <div>Laddar ditt lager...</div>;

  return (
    <>
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
      </div>

      <div className="mt-4">
        {isAuthenticated ? (
          shoppingList?.map((i) => (
            <ItemShopingList key={i.id} shoppingListDto={i} token={token!} />
          ))
        ) : (
          <div>Logga in</div>
        )}
      </div>
    </>
  );
}
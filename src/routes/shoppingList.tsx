import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/shoppingList")({
  component: ShoppingList,
});

// eslint-disable-next-line react-refresh/only-export-components
function ShoppingList() {
  return <div>ShoppingList!</div>;
}

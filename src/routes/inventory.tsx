import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/inventory")({
  component: Inventory,
});

// eslint-disable-next-line react-refresh/only-export-components
function Inventory() {
  return <div className="p-2">Inventory!</div>;
}

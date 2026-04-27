import { createFileRoute } from "@tanstack/react-router";
import willys from "../assets/IMG_9084.jpg";

export const Route = createFileRoute("/")({
  component: Index,
});

// eslint-disable-next-line react-refresh/only-export-components
function Index() {
  return (
    <div className="flex flex-col items-center bg-white">
      <img src={willys} alt="Willys" className="w-full h-auto object-cover" />
    </div>
  );
}

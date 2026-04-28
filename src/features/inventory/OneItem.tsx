import type { InventoryListDto } from "../../Types";
import { useAddToShoppingList } from "../shopping-list/api";
import { useDeleteInventoryItem } from "./api";

export const OneItem = ({
  inventoryListDto,
  token,
}: {
  inventoryListDto: InventoryListDto;
  token: string;
}) => {
  const { mutate: deleteInventoryItem } = useDeleteInventoryItem(token);
  const { mutate: addToShoppingList } = useAddToShoppingList(token);

  const id = inventoryListDto.inventoryId;

  const getProgressColor = (progress: number) => {
    if (progress > 0.66) return "progress-success";
    if (progress > 0.33) return "progress-warning";
    return "progress-error";
  };

  return (
    <div className="p-4 border-b">
      <p>Antal: {inventoryListDto.quantity}</p>

      <div className="flex gap-2 mb-2">
        <button
          className="btn btn-sm btn-outline"
          onClick={() => deleteInventoryItem(id)}
        >
          Ta bort
        </button>

        <button
          className="btn btn-sm btn-primary"
          onClick={() => addToShoppingList(id)}
        >
          + Inköpslista
        </button>

        <button
          className="btn btn-sm btn-secondary"
          onClick={() => {
            deleteInventoryItem(id);
            addToShoppingList(id);
          }}
        >
          Flytta till inköp
        </button>
      </div>

      <progress
        className={`progress w-56 ${getProgressColor(inventoryListDto.expiryProgress)}`}
        value={inventoryListDto.expiryProgress}
        max="1"
      ></progress>
    </div>
  );
};

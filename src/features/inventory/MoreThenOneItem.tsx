import type { InventoryListDto } from "../../Types";
import { useAddToShoppingList } from "../shopping-list/api";
import { useDeleteInventoryItem, useUpdateItemQuantity } from "./api";

export const MoreThenOneItem = ({
  inventoryListDto,
  token, 
}: {
  inventoryListDto: InventoryListDto;
  token: string;
}) => {
  const { mutate: deleteItem } = useDeleteInventoryItem(token);
  const { mutate: addToShopping } = useAddToShoppingList(token);
  const { mutate: updateQuantity } = useUpdateItemQuantity(token);

  const id = inventoryListDto.inventoryId;

  return (
    <div style={{ paddingLeft: "20px", borderLeft: "2px solid red" }}>
      <span>
        Datum: {inventoryListDto.expiryDate} - Antal:{" "}
        {inventoryListDto.quantity}
      </span>

      <button onClick={() => deleteItem(id)}>Radera alla</button>

      <button onClick={() => updateQuantity({ id, quantity: 3 })}>
        Sätt antal till 3
      </button>

      <button
        onClick={() => {
          deleteItem(id);
          addToShopping(id);
        }}
      >
        Flytta till Inköpslista
      </button>

      <progress
        className={`progress w-56 ${
          inventoryListDto.expiryProgress > 0.66
            ? "progress-success"
            : inventoryListDto.expiryProgress > 0.33
              ? "progress-warning"
              : "progress-error"
        }`}
        value={inventoryListDto.expiryProgress}
        max="1"
      ></progress>
    </div>
  );
};

import { useState } from "react";
import type { InventoryListDto } from "../../Types";
import { useAddToShoppingList } from "../shopping-list/api";
import { useDeleteInventoryItem, useUpdateItemQuantity } from "./api";

export const MoreThenOneItem = ({ inventoryListDto, token }: { inventoryListDto: InventoryListDto; token: string; }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [val, setVal] = useState(inventoryListDto.quantity - 1 || 1);

  const { mutate: del, isPending: isDeleting } = useDeleteInventoryItem(token);
  const { mutate: add, isPending: isAddingShop } = useAddToShoppingList(token);
  const { mutate: upd, isPending: isUpdating } = useUpdateItemQuantity(token);

  const formattedDate = inventoryListDto.expiryDate.substring(0, 10);
  const getCol = (p: number) => p > 0.66 ? "progress-error" : p > 0.33 ? "progress-warning" : "progress-success";

  return (
    <div className="flex flex-col gap-1 pl-2 border-l-2 border-[#e2001a] mb-3 pt-1.5">
      <div className="text-[10px] font-bold text-gray-600 flex justify-between items-center">
        <span>{formattedDate}</span>
        {isEditing ? (
          <div className="flex items-center gap-1 bg-gray-50 rounded px-1 border border-gray-200">
            <select className="bg-transparent outline-none text-[10px]" value={val} onChange={(e) => setVal(Number(e.target.value))}>
              {Array.from({ length: inventoryListDto.quantity - 1 }, (_, i) => i + 1).map(n => <option key={n} value={n}>{n} st</option>)}
            </select>
            <button 
              onClick={() => { upd({ id: inventoryListDto.inventoryId, quantity: val }); setIsEditing(false); }} 
              disabled={isUpdating}
              className="text-green-600 flex items-center"
            >
              {isUpdating ? <span className="loading loading-spinner loading-xs w-3 h-3"></span> : "OK"}
            </button>
            <button onClick={() => setIsEditing(false)} className="text-gray-400">✕</button>
          </div>
        ) : (
          <span onClick={() => inventoryListDto.quantity > 1 && setIsEditing(true)} className={`${inventoryListDto.quantity > 1 ? "cursor-pointer border-b border-dotted border-gray-400" : ""}`}>{inventoryListDto.quantity} st</span>
        )}
      </div>
      <progress className={`progress w-full h-1 ${getCol(inventoryListDto.expiryProgress)}`} value={inventoryListDto.expiryProgress} max="1" />
      <div className="flex gap-1">
        <button 
          onClick={() => del(inventoryListDto.inventoryId)} 
          disabled={isDeleting}
          className="btn btn-xs flex-1 bg-[#e2001a] text-white border-none h-5 min-h-0 text-[9px] disabled:bg-red-300"
        >
          {isDeleting ? <span className="loading loading-spinner loading-xs w-3 h-3"></span> : "Radera"}
        </button>
        <button 
          onClick={() => add(inventoryListDto.inventoryId)} 
          disabled={isAddingShop}
          className="btn btn-xs flex-1 bg-gray-100 text-gray-700 border-none h-5 min-h-0 text-[9px] disabled:bg-gray-200"
        >
          {isAddingShop ? <span className="loading loading-spinner loading-xs w-3 h-3"></span> : "+ Inköp"}
        </button>
      </div>
    </div>
  );
};
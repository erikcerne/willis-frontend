import type { ShoppingListDto } from "../../Types";
import { useDeleteShoppingList } from "./api";

export const ItemShopingList = ({
  shoppingListDto,
  token,
}: {
  shoppingListDto: ShoppingListDto;
  token: string;
}) => {
  const { mutate: deleteShoppingList, isPending } = useDeleteShoppingList(token);
  const id: string = shoppingListDto.id;

  return (
    <div className="bg-white border border-gray-100 rounded-lg w-full mb-2 flex items-center justify-between p-3 shadow-sm">
      <h2 className="text-[12px] font-bold text-gray-800 leading-snug break-words pr-2">
        {shoppingListDto.name}
      </h2>
      
      <button 
        onClick={() => deleteShoppingList(id)}
        disabled={isPending}
        className="btn btn-xs bg-[#e2001a] text-white hover:bg-red-700 border-none h-7 min-h-0 text-[10px] px-3 shadow-sm disabled:bg-red-300"
      >
        {isPending ? (
          <span className="loading loading-spinner loading-xs"></span>
        ) : (
          "Ta bort"
        )}
      </button>
    </div>
  );
};
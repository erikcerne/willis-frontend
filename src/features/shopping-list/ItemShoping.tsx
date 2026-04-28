import type { ShoppingListDto } from "../../Types";
import { useDeleteShoppingList } from "./api";

export const ItemShopingList = ({
  shoppingListDto,
  token,
}: {
  shoppingListDto: ShoppingListDto;
  token: string;
}) => {
  const { mutate: deleteShoppingList } = useDeleteShoppingList(token);

  const id: string = shoppingListDto.id;

  return (
    <div>
        <p>{shoppingListDto.name}</p>
      <button onClick={() => deleteShoppingList(id)}>Ta bort</button>
    </div>
  );
};

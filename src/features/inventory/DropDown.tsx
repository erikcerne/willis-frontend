import type { InventoryListDto } from "../../Types";
import { MoreThenOneItem } from "./MoreThenOneItem";
import { OneItem } from "./OneItem";

export const DropDown = ({
  inventoryListDto,
  token,
}: {
  inventoryListDto: InventoryListDto[];
  token: string;
}) => {
  return (
    <div className="flex flex-col w-full pt-1">
      {inventoryListDto.length > 1 ? (
        inventoryListDto.map((i) => (
          <MoreThenOneItem
            key={i.inventoryId}
            inventoryListDto={i}
            token={token}
          />
        ))
      ) : (
        inventoryListDto.length === 1 && (
          <OneItem
            inventoryListDto={inventoryListDto[0]}
            token={token}
          />
        )
      )}
    </div>
  );
};
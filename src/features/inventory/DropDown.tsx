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
    <>
      <div className="dropdown-content">
        {inventoryListDto.length > 1 ? (
          <div className="flex flex-col gap-2">
            {inventoryListDto.map((i) => (
              <MoreThenOneItem 
                key={i.inventoryId} 
                inventoryListDto={i} 
                token={token} 
              />
            ))}
          </div>
        ) : (
          inventoryListDto.length === 1 && (
            <OneItem 
              inventoryListDto={inventoryListDto[0]} 
              token={token} 
            />
          )
        )}
      </div>
    </>
  );
};
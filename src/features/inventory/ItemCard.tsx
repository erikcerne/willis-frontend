import { useState } from "react";
import type { InventoryDto } from "../../Types";
import { DropDown } from "./DropDown";
import { OneItem } from "./OneItem";
import { MoreThenOneItem } from "./MoreThenOneItem";

export const ItemCard = ({
  inventoryDto,
  token,
}: {
  inventoryDto: InventoryDto;
  token: string;
}) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleDropDown = () => {
    setIsExpanded(!isExpanded);
  };

  const items = inventoryDto.inventoryItems;

  return (
    <div className="card bg-base-100 shadow-xl p-4">
      <img
        src={inventoryDto.pic}
        alt={inventoryDto.name}
        className="w-full h-48 object-cover"
      />
      <h1 className="text-xl font-bold mt-2">{inventoryDto.name}</h1>

      {items.length > 1 ? (
        <div>
          <button className="btn btn-ghost btn-sm" onClick={toggleDropDown}>
            {isExpanded ? "Dölj detaljer" : `Visa alla (${items.length} st)`}
          </button>

          {isExpanded && (
            <div className="mt-2">
              <DropDown inventoryListDto={items} token={token} />
            </div>
          )}
        </div>
      ) : (
        <div className="mt-2">
          {items[0].quantity > 1 ? (
            <MoreThenOneItem inventoryListDto={items[0]} token={token} />
          ) : (
            <OneItem inventoryListDto={items[0]} token={token} />
          )}
        </div>
      )}
    </div>
  );
};

import { useState } from "react";
import type { InventoryDto } from "../../Types";
import { DropDown } from "./DropDown";
import { OneItem } from "./OneItem";

export const ItemCard = ({
  inventoryDto,
  token,
}: {
  inventoryDto: InventoryDto;
  token: string;
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const items = inventoryDto.inventoryItems;
  const totalQuantity = items.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <div className="bg-white border border-gray-100 rounded-lg w-full mb-2 flex flex-col overflow-hidden shadow-sm">
      <div className="flex min-h-[5rem]">
        <figure className="w-24 shrink-0 bg-white flex items-center justify-center p-2">
          <div className="w-full h-20 flex items-center justify-center">
            <img
              src={inventoryDto.pic}
              alt={inventoryDto.name}
              className="max-w-full max-h-full object-contain w-auto h-auto"
            />
          </div>
        </figure>

        <div className="p-2 flex-1 flex flex-col justify-start">
          <h2 className="text-[12px] font-bold text-gray-800 leading-snug mb-0.5 break-words">
            {inventoryDto.name}
          </h2>

          {items.length === 1 ? (
            <OneItem inventoryListDto={items[0]} token={token} />
          ) : (
            <div className="flex items-center justify-between mt-0.5">
              <div className="text-[10px] text-gray-500 font-semibold">
                Totalt: {totalQuantity} st ({items.length} datum)
              </div>

              <button
                onClick={() => setIsOpen(!isOpen)}
                className="flex items-center gap-1 text-[10px] font-bold text-[#e2001a] bg-red-50 px-2 py-0.5 rounded hover:bg-red-100 transition-colors mt-3"
              >
                {isOpen ? "Dölj" : "Visa"}
                <svg
                  className={`w-3 h-3 transition-transform ${isOpen ? "rotate-180" : ""}`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M19 9l-7 7-7-7"
                  ></path>
                </svg>
              </button>
            </div>
          )}
        </div>
      </div>

      {items.length > 1 && isOpen && (
        <div className="border-t border-gray-100 bg-gray-50/30">
          <div className="px-2 pt-1 pb-2">
            <DropDown inventoryListDto={items} token={token} />
          </div>
        </div>
      )}
    </div>
  );
};

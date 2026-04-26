export interface InventoryDto{
expiryDate: string;
expiryProgress: number;
qunatety: number;
daysleft: number;
inventoryId: string;
}

export interface InventoryListDto{
    name: string;
    category: string;
    inventoryItems: InventoryDto[];
    pic: string
}

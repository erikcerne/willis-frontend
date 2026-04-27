export interface InventoryListDto {
  expiryDate: string;      
  expiryProgress: number;  
  quantity: number;        
  daysLeft: number;        
  inventoryId: string;  
}

export interface InventoryDto {
  name: string;
  category: string;
  inventoryItems: InventoryListDto[]; 
  pic: string;             
}

export interface ShoppingList {
  name: string;
  category: string;
  id: string;
}

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

export interface ShoppingListDto {
  name: string;
  category: string;
  id: string;
}

export interface ReceiveInventoryDto {
  expiryDate: string;
  produceDate: string;
  quantity: number;
  productId: string;
  userId: string;
}
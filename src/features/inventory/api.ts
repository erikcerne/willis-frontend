import { queryOptions } from "@tanstack/react-query";
import type { InventoryDto } from "../../Types";

export const inventoryQuery = (token: string | undefined) => {
  const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

  return queryOptions({
    queryKey: ["inventory", token],
    queryFn: async (): Promise<InventoryDto[]> => {
      const res = await fetch(`${API_BASE_URL}/inventory`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      
      if (!res.ok) {
        throw new Error("Kunde inte hämta inventory");
      }
      
      return res.json();
    },
    enabled: !!token,
  });
};
import { queryOptions, useMutation, useQueryClient } from "@tanstack/react-query";
import type { ShoppingListDto } from "../../Types";

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;



export const shoppingListQuery = (token: string | undefined) => {
  return queryOptions({
    queryKey: ["shopping", token],
    queryFn: async (): Promise<ShoppingListDto[]> => {
      const res = await fetch(`${API_BASE_URL}/shopping`, { 
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      if (!res.ok) {
        throw new Error("Kunde inte hämta inköpslistan");
      }

      return res.json();
    },
    enabled: !!token, 
  });
};

export const useDeleteShoppingList = (token: string) => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async (id: string) => {
      const res = await fetch(`${API_BASE_URL}/shopping?id=${id}`, {
        method: "DELETE",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      if (!res.ok) throw new Error("Kunde inte radera inköpslistan");
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["shopping"] });
    },
  });
};

export const useAddToShoppingList = (token: string) => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async (inventoryId: string) => {
      const res = await fetch(`${API_BASE_URL}/shopping?inventoryId=${inventoryId}`, {
        method: "POST",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      if (!res.ok) throw new Error("Kunde inte lägga till i inköpslistan");
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["shopping"] });
    },
  });
};
import {
  queryOptions,
  useMutation,
  useQueryClient,
} from "@tanstack/react-query";
import type { InventoryDto, ReceiveInventoryDto } from "../../Types";
import { MOCK_CARTS } from "./json";

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

const getUserIdFromToken = (token: string): string => {
  try {
    const base64Url = token.split(".")[1];
    const base64 = base64Url.replace(/-/g, "+").replace(/_/g, "/");
    const jsonPayload = decodeURIComponent(
      window
        .atob(base64)
        .split("")
        .map((c) => "%" + ("00" + c.charCodeAt(0).toString(16)).slice(-2))
        .join(""),
    );
    return JSON.parse(jsonPayload).sub;
  } catch (e) {
    console.error("Kunde inte avkoda token", e);
    return "";
  }
};

export const inventoryQuery = (token: string) => {
  return queryOptions({
    queryKey: ["inventory", token],
    queryFn: async (): Promise<InventoryDto[]> => {
      const res = await fetch(`${API_BASE_URL}/inventory`, {
        headers: { Authorization: `Bearer ${token}` },
      });
      if (!res.ok) throw new Error("Kunde inte hämta inventory");
      return res.json();
    },
    enabled: !!token,
  });
};

export const useAddToInventory = (token: string) => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async () => {
      const currentUserId = getUserIdFromToken(token);

      const randomCartIndex = Math.floor(Math.random() * MOCK_CARTS.length);
      const selectedCart = MOCK_CARTS[randomCartIndex];

      const itemsWithRealUser: ReceiveInventoryDto[] = selectedCart.map(
        (item) => ({
          ...item,
          userId: currentUserId,
        }),
      );

      console.log(
        `Laddar upp vagn index: ${randomCartIndex}`,
        itemsWithRealUser,
      );

      const res = await fetch(`${API_BASE_URL}/inventory`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(itemsWithRealUser),
      });

      if (!res.ok) throw new Error("Kunde inte lägga till i inventory");
    },
    onSuccess: () => queryClient.invalidateQueries({ queryKey: ["inventory"] }),
  });
};

export const useUpdateItemQuantity = (token: string) => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async ({ id, quantity }: { id: string; quantity: number }) => {
      const res = await fetch(`${API_BASE_URL}/inventory/${id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(quantity),
      });
      if (!res.ok) throw new Error("Kunde inte uppdatera");
    },
    onSuccess: () => queryClient.invalidateQueries({ queryKey: ["inventory"] }),
  });
};

export const useDeleteInventoryItem = (token: string) => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async (id: string) => {
      const res = await fetch(`${API_BASE_URL}/inventory/${id}`, {
        method: "DELETE",
        headers: { Authorization: `Bearer ${token}` },
      });
      if (!res.ok) throw new Error("Kunde inte ta bort varan");
    },
    onSuccess: () => queryClient.invalidateQueries({ queryKey: ["inventory"] }),
  });
};

export const useClearExpiredItems = (token: string) => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async () => {
      const res = await fetch(`${API_BASE_URL}/inventory/expired`, {
        method: "DELETE",
        headers: { Authorization: `Bearer ${token}` },
      });
      if (!res.ok) throw new Error("Kunde inte rensa utgångna varor");
    },
    onSuccess: () => queryClient.invalidateQueries({ queryKey: ["inventory"] }),
  });
};

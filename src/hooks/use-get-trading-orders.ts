import { useState, useEffect } from "react";
import { getTradingOrders } from "../services/trading-orders";
import type { TradingOrder } from "@/types/order";

export const useGetTradingOrders = () => {
  const [tradingOrders, setTradingOrders] = useState<TradingOrder[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);
  const [refresh, setRefresh] = useState<boolean>(false);

  useEffect(() => {
    async function fetchOrders() {
      try {
        setLoading(true);
        const orders = await getTradingOrders();
        setLoading(false);
        setError(null);
        setTradingOrders(orders);
      } catch (error) {
        setLoading(false);
        const err: Error =
          error instanceof Error
            ? error
            : new Error("Fehler beim Laden Trading orders");
        setError(err);
      } finally {
        setLoading(false);
      }
    }
    fetchOrders();
  }, [refresh]);

  const refreshTradingOrders = () => {
    setRefresh(!refresh);
  };

  return { tradingOrders, isLoading: loading, error, refreshTradingOrders };
};

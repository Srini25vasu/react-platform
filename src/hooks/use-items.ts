import { useEffect, useState } from "react";
import * as ItemService from "../services/item-list";
import type { Task } from "@/models/task";

/**
 * 
 * @returns  is a plain let captured by closure — it can only change value between the moment fetchItems
 *  starts and the moment the await resolves, because that's the only point where 
 * React gets to run the cleanup function (on unmount or before re-running the 
 * effect for a new refreshItems value). Before the await, ignore is synchronously
 *  guaranteed to still be false, so checking it there would be a no-op.
 *  Checking it right after await ItemService.getItems() resolves is the earliest 
 * point where a stale/superseded effect could have set it to true, which is exactly 
 * when we need to bail out before calling setItems.
 */
export const useItemsList = () => {
  const [items, setItems] = useState<Task[]>([]);
  const [isLoading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>();
  const [refreshItems, setRefreshItems] = useState<boolean>(false);
  useEffect(() => {
    let ignore = false;
    async function fetchItems() {
      try {
        setLoading(true);
        setError("")
        const data = await ItemService.getItems();
        if (ignore) return;
        setItems(data);
      } catch (error) {
        if (ignore) return;
        console.error(error);
        const errMsg =
          error instanceof Error
            ? error.message
            : "Fehler beim Laden der Items";
        setError(errMsg);        
      } finally {
        if (!ignore) setLoading(false);
      }
    }
    fetchItems();
    // prevent stale responses (superseded refresh or unmount) from overwriting state
    return () => {
      ignore = true;
    };
  }, [refreshItems]);

  const refreshItemsList = () => {
    setRefreshItems(!refreshItems);
  };

  return { items, isLoading, error, refreshItemsList };
};

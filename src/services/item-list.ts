import { itemsApi } from "@/api/itemsApi";
import type { Task, CreateTaskPayload } from "@/models/task";

const resource = "items";
const getItems = (): Promise<Task[]> => {
  return itemsApi
    .get(resource)
    .then((res) => {
      if (!res.ok) throw new Error(res.statusText);
      return res.json();
    })
    .catch((err) => {
      throw err;
    });
};

const createItem = (payload: CreateTaskPayload): Promise<Task> => {
  return itemsApi
    .post(resource, payload)
    .then((res) => {
      if (!res.ok) throw new Error(res.statusText);
      return res.json();
    })
    .catch((err) => {
      throw err;
    });
};
const deleteItem = (id: string): Promise<Task> => {
  return itemsApi.delete(resource, id).then((res) => {
    if (!res.ok) throw new Error(res.statusText);
    return res.json();
  });
};

export { getItems, createItem, deleteItem };

import type { CreateTaskPayload,  UpdateTaskPayload } from "@/models/task";
/**
 * This is the only file in the entire application that deals with HTTP calls. The other files that need to call the API only need to call these methods.

Now if you decide to replace Fetch with Axios, you just change this single file and you're good to go.

On the test side, now it's possible to test each API method individually without relying on the services call.
 */

const baseApi = "http://localhost:798/api/items";

const itemsApi = {
  get: (endpoint: string) => fetch(`${baseApi}/${endpoint}`),
  post: (endpoint: string, data: CreateTaskPayload) => fetch(`${baseApi}/${endpoint}`, { method: 'POST', body: encodeURIComponent(JSON.stringify(data)) }),
  delete: (endpoint: string, id: string) => fetch(`${baseApi}/${endpoint}/${id}, { method: 'DELETE' })`),
  put: (endpoint: string, id: string, data: UpdateTaskPayload) => fetch(`${baseApi}/${endpoint}/${id}`, { method: 'PUT', body: encodeURIComponent(JSON.stringify(data)) }),
};

export { itemsApi };

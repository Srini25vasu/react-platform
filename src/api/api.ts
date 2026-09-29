//import { createTradingOrder, updateTradingOrder, getTradingOrders } from "@/services/trading-orders";

import type { TradingOrder, UpdateOrderPayload } from "@/types/order";

const basePath = 'http://localhost:3000';

const api = {
    get: (endpoint: string): Promise<TradingOrder> =>
        fetch(`${basePath}/${endpoint}`).then(res => res.json()),
    post: (endpoint: string, data: TradingOrder): Promise<TradingOrder> =>
        fetch(`${basePath}/${endpoint}`, { method: 'POST', body: JSON.stringify(data) }).then(res => res.json()),
    put: (endpoint: string, data: UpdateOrderPayload): Promise<TradingOrder> =>
        fetch(`${basePath}/${endpoint}`, { method: 'PUT', body: JSON.stringify(data) }).then(res => res.json()),
    delete: (endpoint: string): Promise<TradingOrder> =>
        fetch(`${basePath}/${endpoint}`, { method: 'DELETE' }).then(res => res.json()),

}

export { api }
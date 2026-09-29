import type { TradingOrder } from '../types/order'

const basePath = '/api/v1/trading/orders'

const getTradingOrders = (): Promise<TradingOrder[]> => {
  return fetch(basePath).then((res) => res.json() as Promise<TradingOrder[]>)
}

const createTradingOrder = (tradingOrder: TradingOrder): Promise<TradingOrder> => {
  return fetch(basePath, {
    method:'POST',
    body:JSON.stringify(tradingOrder),})
    .then((res) => res.json() as Promise<TradingOrder>)
}

const updateTradingOrder = (tradingOrder: TradingOrder): Promise<TradingOrder> => {
  return fetch(`${basePath}/${tradingOrder.id}`, {
    method:'PUT',
    body:JSON.stringify(tradingOrder),})
    .then((res) => res.json() as Promise<TradingOrder>)
}

export {
  getTradingOrders,
  createTradingOrder,
  updateTradingOrder
}

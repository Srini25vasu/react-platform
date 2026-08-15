import type { Currency, ID, Nullable, Optional, Status } from './common'

export type TradeSide = 'buy' | 'sell'
export type TradeType = 'spot' | 'future' | 'option'
export type OrderKind = 'limit' | 'market' | 'stop' | 'stop_limit'

export interface AssetReference {
  symbol: string
  exchange?: string
  currency?: Currency
}

export interface TradeFill {
  id: ID
  orderId: ID
  tradeId?: ID
  symbol: string
  side: TradeSide
  quantity: number
  price: number
  fee?: number
  timestamp: string
}

export interface TradingOrderBase {
  id: ID
  clientId?: ID
  symbol: string
  side: TradeSide
  type: TradeType
  status: Status
  quantity: number
  price?: number
  createdAt: string
  updatedAt?: string
}

export interface SpotOrder extends TradingOrderBase {
  type: 'spot'
  orderKind: OrderKind
  fillPrice?: number
}

export interface FutureOrder extends TradingOrderBase {
  type: 'future'
  orderKind: OrderKind
  leverage?: number
  marginType?: 'isolated' | 'cross'
  maintenanceMargin?: number
  liquidationPrice?: number
}

export interface OptionOrder extends TradingOrderBase {
  type: 'option'
  orderKind: 'limit' | 'market'
  strikePrice: number
  expiryDate: string
  premium?: number
  optionType: 'call' | 'put'
}

export type TradingOrder = SpotOrder | FutureOrder | OptionOrder

export interface CreateOrderPayload {
  symbol: string
  side: TradeSide
  type: TradeType
  quantity: number
  price?: number
  orderKind?: OrderKind
  leverage?: number
  marginType?: 'isolated' | 'cross'
  strikePrice?: number
  expiryDate?: string
  optionType?: 'call' | 'put'
  premium?: number
  clientId?: ID
}

export interface UpdateOrderPayload {
  id: ID
  quantity?: number
  price?: number
  status?: Status
  leverage?: number
  marginType?: 'isolated' | 'cross'
  strikePrice?: number
  premium?: number
  expiryDate?: string
}

export interface OrderFilters {
  symbol?: string
  side?: TradeSide
  status?: Status
  type?: TradeType
  from?: string
  to?: string
}

export interface TickerSnapshot {
  symbol: string
  price: number
  changePercent: number
  volume: number
  high: number
  low: number
  timestamp: string
}

export interface MarginAccount {
  id: ID
  accountId: ID
  currency: Currency
  equity: number
  usedMargin: number
  availableMargin: number
  marginRatio: number
  updatedAt: string
}

export interface FutureMarginRequirement {
  symbol: string
  leverage: number
  notionalValue: number
  requiredMargin: number
  maintenanceMargin: number
  liquidationPrice: number
}

export interface OptionPremiumQuote {
  symbol: string
  strikePrice: number
  expiryDate: string
  optionType: 'call' | 'put'
  bid: number
  ask: number
  last: number
  impliedVolatility: number
  timestamp: string
}

export interface TradingFillResult {
  orderId: ID
  fills: TradeFill[]
  remainingQuantity: number
  status: Status
}

export interface OrderBookEntry {
  price: number
  quantity: number
  side: TradeSide
}

export interface OrderBook {
  symbol: string
  bids: OrderBookEntry[]
  asks: OrderBookEntry[]
  updatedAt: string
}

export type OrderStatus = Status
export type TradeAmount = number
export type FillOrderRequest = CreateOrderPayload & {
  fills?: TradeFill[]
}

export type OptionalOrderFields = Optional<TradingOrder>
export type NullableOrderFields = Nullable<TradingOrder>

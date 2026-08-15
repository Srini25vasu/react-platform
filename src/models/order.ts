import type { PaginationParams } from '../types/common'
import type {
  CreateOrderPayload,
  FillOrderRequest,
  FutureMarginRequirement,
  MarginAccount,
  OptionOrder,
  OptionPremiumQuote,
  OrderBook,
  OrderFilters,
  OrderStatus,
  SpotOrder,
  TickerSnapshot,
  TradeFill,
  TradingFillResult,
  TradingOrder,
  UpdateOrderPayload,
} from '../types/order'

export type OrderModel = TradingOrder
export type CreateOrderModel = CreateOrderPayload
export type UpdateOrderModel = UpdateOrderPayload
export type FillOrderModel = FillOrderRequest
export type OrderFilterModel = OrderFilters
export type TickerModel = TickerSnapshot
export type MarginAccountModel = MarginAccount
export type FutureMarginModel = FutureMarginRequirement
export type OptionPremiumModel = OptionPremiumQuote
export type OrderBookModel = OrderBook
export type FillModel = TradeFill
export type FillResultModel = TradingFillResult
export type SpotOrderModel = SpotOrder
export type OptionOrderModel = OptionOrder
export type OrderStatusModel = OrderStatus
export type PaginationModel = PaginationParams

import type {
  CreateOrderPayload,
  OrderStatus,
  TradeFill,
  TradingOrder,
  UpdateOrderPayload,
} from '../types/order'

const STATUS_NORMALIZATION: Record<string, OrderStatus> = {
  pending: 'pending',
  filled: 'filled',
  cancelled: 'cancelled',
  review: 'review',
}

export const OrderDomain = {
  normalizeStatus(status: string | undefined): OrderStatus {
    if (!status) {
      return 'pending'
    }

    return STATUS_NORMALIZATION[status.toLowerCase()] ?? 'pending'
  },

  isFilled(order: Pick<TradingOrder, 'status'> | undefined): boolean {
    return order?.status === 'filled'
  },

  getTypeLabel(type: TradingOrder['type']): string {
    return type.charAt(0).toUpperCase() + type.slice(1)
  },

  createOrderFromPayload(payload: CreateOrderPayload): TradingOrder {
    const createdAt = new Date().toISOString()

    if (payload.type === 'spot') {
      return {
        id: `${payload.symbol}-${Date.now()}`,
        clientId: payload.clientId,
        symbol: payload.symbol,
        side: payload.side,
        type: 'spot',
        status: 'pending',
        quantity: payload.quantity,
        price: payload.price,
        createdAt,
        updatedAt: createdAt,
        orderKind: payload.orderKind ?? 'market',
        fillPrice: payload.price,
      }
    }

    if (payload.type === 'future') {
      return {
        id: `${payload.symbol}-${Date.now()}`,
        clientId: payload.clientId,
        symbol: payload.symbol,
        side: payload.side,
        type: 'future',
        status: 'pending',
        quantity: payload.quantity,
        price: payload.price,
        createdAt,
        updatedAt: createdAt,
        orderKind: payload.orderKind ?? 'market',
        leverage: payload.leverage ?? 1,
        marginType: payload.marginType ?? 'isolated',
      }
    }

    const optionOrderKind = payload.orderKind === 'limit' || payload.orderKind === 'market'
      ? payload.orderKind
      : 'market'

    return {
      id: `${payload.symbol}-${Date.now()}`,
      clientId: payload.clientId,
      symbol: payload.symbol,
      side: payload.side,
      type: 'option',
      status: 'pending',
      quantity: payload.quantity,
      price: payload.price,
      createdAt,
      updatedAt: createdAt,
      orderKind: optionOrderKind,
      strikePrice: payload.strikePrice ?? payload.price ?? 0,
      expiryDate: payload.expiryDate ?? new Date().toISOString(),
      premium: payload.premium,
      optionType: payload.optionType ?? 'call',
    }
  },

  buildCreatePayload(input: Partial<CreateOrderPayload> = {}): CreateOrderPayload {
    return {
      symbol: input.symbol ?? '',
      side: input.side ?? 'buy',
      type: input.type ?? 'spot',
      quantity: input.quantity ?? 0,
      price: input.price,
      orderKind: input.orderKind ?? 'market',
      leverage: input.leverage ?? 1,
      marginType: input.marginType ?? 'isolated',
      strikePrice: input.strikePrice,
      expiryDate: input.expiryDate,
      optionType: input.optionType ?? 'call',
      premium: input.premium,
      clientId: input.clientId,
    }
  },

  buildUpdatePayload(input: Partial<UpdateOrderPayload> = {}): UpdateOrderPayload {
    return {
      id: input.id ?? '',
      quantity: input.quantity,
      price: input.price,
      status: input.status,
      leverage: input.leverage,
      marginType: input.marginType,
      strikePrice: input.strikePrice,
      premium: input.premium,
      expiryDate: input.expiryDate,
    }
  },

  createFill(orderId: string, symbol: string, side: 'buy' | 'sell', quantity: number, price: number): TradeFill {
    return {
      id: `${orderId}-fill-${Date.now()}`,
      orderId,
      symbol,
      side,
      quantity,
      price,
      timestamp: new Date().toISOString(),
    }
  },
} as const

export const { normalizeStatus, isFilled, getTypeLabel, createOrderFromPayload, buildCreatePayload, buildUpdatePayload, createFill } = OrderDomain

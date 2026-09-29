import { describe, it, expect, vi, beforeEach } from 'vitest'
import { renderHook, waitFor } from '@testing-library/react'
import { useGetTradingOrders } from './use-get-trading-orders'
import { getTradingOrders } from '../services/trading-orders'
import type { SpotOrder } from '@/types/order'

vi.mock('../services/trading-orders', () => ({
  getTradingOrders: vi.fn(),
}))

const mockedGetTradingOrders = vi.mocked(getTradingOrders)

const order: SpotOrder = {
  id: '1',
  symbol: 'AAPL',
  side: 'buy',
  type: 'spot',
  status: 'pending',
  quantity: 10,
  price: 150,
  orderKind: 'limit',
  createdAt: '2026-01-01T00:00:00.000Z',
}

beforeEach(() => {
  mockedGetTradingOrders.mockReset()
})

describe('useGetTradingOrders', () => {
  it('loads trading orders and clears the loading state', async () => {
    mockedGetTradingOrders.mockResolvedValueOnce([order])

    const { result } = renderHook(() => useGetTradingOrders())

    expect(result.current.isLoading).toBe(true)

    await waitFor(() => expect(result.current.isLoading).toBe(false))

    expect(result.current.tradingOrders).toEqual([order])
    expect(result.current.error).toBeNull()
  })

  it('sets an error when fetching trading orders fails', async () => {
    mockedGetTradingOrders.mockRejectedValueOnce(new Error('network error'))

    const { result } = renderHook(() => useGetTradingOrders())

    await waitFor(() => expect(result.current.error).not.toBeNull())

    expect(result.current.error?.message).toBe('network error')
    expect(result.current.tradingOrders).toEqual([])
  })

  it('refetches trading orders when refreshTradingOrders is called', async () => {
    mockedGetTradingOrders.mockResolvedValueOnce([order])

    const { result } = renderHook(() => useGetTradingOrders())

    await waitFor(() => expect(result.current.isLoading).toBe(false))
    expect(mockedGetTradingOrders).toHaveBeenCalledTimes(1)

    mockedGetTradingOrders.mockResolvedValueOnce([])
    result.current.refreshTradingOrders()

    await waitFor(() => expect(mockedGetTradingOrders).toHaveBeenCalledTimes(2))
    await waitFor(() => expect(result.current.tradingOrders).toEqual([]))
  })
})

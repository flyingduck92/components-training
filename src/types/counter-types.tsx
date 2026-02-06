export type CounterState = {
  count: number
  valueToAdd: number
}

export type CounterActions =
  | { type: 'increment_count' }
  | { type: 'decrement_count' }
  | { type: 'set_value_to_add'; payload: number }
  | { type: 'add_to_count' }

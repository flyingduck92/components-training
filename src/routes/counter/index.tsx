import Button from '@/components/Button'
import Panel from '@/components/Panel'
import { createFileRoute } from '@tanstack/react-router'
import { useReducer, type FormEvent } from 'react'
import type { CounterActions, CounterState } from '@/types/counter-types'

export const Route = createFileRoute('/counter/')({
  component: CounterPage,
})

const INCREMENT_COUNT = 'increment_count'
const DECREMENT_COUNT = 'decrement_count'
const SET_VALUE_TO_ADD = 'set_value_to_add'
const ADD_TO_COUNT = 'add_to_count'

const reducer = (state: CounterState, action: CounterActions): CounterState => {
  switch (action.type) {
    case INCREMENT_COUNT:
      return { ...state, count: state.count + 1 }
    case DECREMENT_COUNT:
      return { ...state, count: state.count - 1 }
    case SET_VALUE_TO_ADD:
      return { ...state, valueToAdd: action.payload }
    case ADD_TO_COUNT:
      return {
        ...state,
        count: state.count + state.valueToAdd,
        valueToAdd: 0,
      }
    default:
      return state
  }
}

function CounterPage() {
  const [state, dispatch] = useReducer(reducer, {
    count: 10,
    valueToAdd: 0,
  })

  const increment = () => {
    dispatch({ type: INCREMENT_COUNT })
  }
  const decrement = () => {
    dispatch({ type: DECREMENT_COUNT })
  }

  const onChangeAlot = (e: React.ChangeEvent<HTMLInputElement>) => {
    let value = parseInt(e.target.value) || 0
    dispatch({ type: SET_VALUE_TO_ADD, payload: value })
  }

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    dispatch({ type: ADD_TO_COUNT })
  }

  return (
    <main className='bg-white min-h-screen'>
      <h1 className='mb-5'>Counter with useReducer</h1>

      <Panel className='p-5 space-y-3'>
        <h1 className='text-lg'>Count is {state.count}</h1>
        <div className='flex gap-2'>
          <Button onClick={increment}>Increment</Button>
          <Button onClick={decrement}>Decrement</Button>
        </div>

        <form onSubmit={onSubmit}>
          <label>Add a lot!</label>
          <input
            name='alotVal'
            value={state.valueToAdd || ''}
            type='number'
            className='p-1 ml-3 bg-gray-50 border border-gray-300'
            onChange={onChangeAlot}
          />
          <Button className='mt-3'>Add it!</Button>
        </form>
      </Panel>
    </main>
  )
}

export default CounterPage

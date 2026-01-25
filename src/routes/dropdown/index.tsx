import Dropdown from '@/components/Dropdown'
import { createFileRoute } from '@tanstack/react-router'
import { useState } from 'react'

export const Route = createFileRoute('/dropdown/')({
  component: DropdownPage,
})

type Option = {
  label: string
  value: string
}

function DropdownPage() {
  const [selection, setSelection] = useState<Option | null>(null)

  const options = [
    { label: 'Red', value: 'red' },
    { label: 'Blue', value: 'blue' },
    { label: 'Green', value: 'green' },
  ]

  const handleChangeOne = (option: Option) => {
    setSelection(option)
  }

  return (
    <main className='bg-white min-h-screen'>
      <h1 className='mb-8'>Dropdown Documentation</h1>

      <div className='flex items-center gap-4'>
        <Dropdown
          options={options}
          value={selection}
          onChange={handleChangeOne}
        />
      </div>
    </main>
  )
}

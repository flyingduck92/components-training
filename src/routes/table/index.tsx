// import Table from '@/components/Table'
import SortableTable from '@/components/SortableTable'
import Table from '@/components/Table'
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/table/')({
  component: RouteComponent,
})

type Fruit = {
  name: string
  color: string
  score: number
}

function RouteComponent() {
  const data = [
    { name: 'Orange', color: 'bg-orange-500', score: 5 },
    { name: 'Apple', color: 'bg-red-500', score: 3 },
    { name: 'Banana', color: 'bg-yellow-500', score: 1 },
    { name: 'Lime', color: 'bg-green-500', score: 4 },
  ]

  const config = [
    {
      label: 'Name',
      render: (item: Fruit) => item.name,
      sortValue: (item: Fruit) => item.name,
    },
    {
      label: 'Color',
      render: (item: Fruit) => <div className={`size-5 ${item.color}`}></div>,
    },
    {
      label: 'Score',
      render: (item: Fruit) => item.score,
      sortValue: (item: Fruit) => item.score,
    },
  ]

  const keyFn = (item: Fruit) => item.name

  return (
    <main className='bg-white min-h-screen space-y-5'>
      <h1>Table Documentations</h1>

      <h5>Unsortable Table Documentation</h5>

      <Table
        data={data}
        config={config}
        keyFn={keyFn}
      />

      <h5>Sortable Table Documentation</h5>

      <SortableTable
        data={data}
        config={config}
        keyFn={keyFn}
      />
    </main>
  )
}

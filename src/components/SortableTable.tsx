import { useState } from 'react'
import Table, { type configProps, type TableProps } from './Table'
import { ArrowDownUpIcon, ArrowDownZAIcon, ArrowUpAZIcon } from 'lucide-react'

type SortableTableConfigProps<T> = configProps<T> & {
  sortValue?: (item: T) => string | number
}

type SortableTableProps<T> = TableProps<T> & {
  config: SortableTableConfigProps<T>[]
}

function SortableTable<T>(props: SortableTableProps<T>) {
  const { config, data } = props

  const [sortOrder, setSortOrder] = useState<null | 'asc' | 'desc'>(null)
  const [sortBy, setSortBy] = useState<null | string>(null)

  const handleClick = (label: string | null) => {
    // reset to 'asc' if clicking different header
    if (label !== sortBy) {
      setSortOrder('asc')
      setSortBy(label)
      return
    }

    if (sortOrder === null) {
      setSortOrder('asc')
      setSortBy(label)
    } else if (sortOrder === 'asc') {
      setSortOrder('desc')
      setSortBy(label)
    } else if (sortOrder === 'desc') {
      setSortOrder(null)
      setSortBy(null)
    }
  }

  const getIcons = (
    label: string,
    sortField: string | null,
    sortDirection: 'asc' | 'desc' | null,
    iconSize = 16,
  ) => {
    // label != sortField or sortDirection is NULL
    if (label !== sortField || sortDirection === null) {
      return <ArrowDownUpIcon size={iconSize} />
    }

    // ASC/DESC
    return sortDirection === 'asc' ? (
      <ArrowUpAZIcon size={iconSize} />
    ) : (
      <ArrowDownZAIcon size={iconSize} />
    )
  }

  // add `header` props if `sortValue` exists
  const updatedConfig: configProps<T>[] = config.map(
    (column: SortableTableConfigProps<T>) => {
      if (!column.sortValue) {
        return column
      }

      return {
        ...column,
        header: () => (
          <th
            className='cursor-pointer flex items-center gap-2'
            onClick={() => handleClick(column.label)}
          >
            {getIcons(column.label, sortBy, sortOrder)}
            {column.label}
          </th>
        ),
      }
    },
  )

  let sortedData = data
  if (sortBy && sortOrder) {
    const column = config.find(
      (column: SortableTableConfigProps<T>) => column.label === sortBy,
    )

    if (column?.sortValue) {
      const { sortValue } = column

      const reverseOrder = sortOrder === 'desc' ? -1 : 1
      sortedData = [...data].sort((a, b) => {
        const valueA = sortValue(a)
        const valueB = sortValue(b)

        if (typeof valueA === 'string' && typeof valueB === 'string') {
          return valueA.localeCompare(valueB) * reverseOrder
        } else {
          return ((valueA as number) - (valueB as number)) * reverseOrder
        }
      })
    }
  }

  return (
    <Table
      {...props}
      data={sortedData}
      config={updatedConfig}
    />
  )
}

export default SortableTable

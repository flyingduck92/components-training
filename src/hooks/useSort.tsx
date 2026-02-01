import { useState } from 'react'
import {
  type SortableTableConfigProps,
  type UseSortTypes,
} from '@/types/sortable-table-types'

function useSort<T>({ data, config }: UseSortTypes<T>) {
  const [sortOrder, setSortOrder] = useState<null | 'asc' | 'desc'>(null)
  const [sortBy, setSortBy] = useState<null | string>(null)

  const setSortedColumn = (label: string | null) => {
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

  return {
    sortOrder,
    sortBy,
    sortedData,
    setSortedColumn,
  }
}

export default useSort

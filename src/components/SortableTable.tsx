import Table from './Table'
import {
  type SortableTableProps,
  type SortableTableConfigProps,
} from '@/types/sortable-table-types'
import { ArrowDownUpIcon, ArrowDownZAIcon, ArrowUpAZIcon } from 'lucide-react'
import useSort from '@/hooks/useSort'

function SortableTable<T>(props: SortableTableProps<T>) {
  const { config, data } = props

  const { sortOrder, sortBy, sortedData, setSortedColumn } = useSort({
    data,
    config,
  })

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
  const updatedConfig = config.map((column: SortableTableConfigProps<T>) => {
    if (!column.sortValue) {
      return column
    }

    return {
      ...column,
      header: () => (
        <th
          className='cursor-pointer flex items-center gap-2'
          onClick={() => setSortedColumn(column.label)}
        >
          {getIcons(column.label, sortBy, sortOrder)}
          {column.label}
        </th>
      ),
    }
  })

  return (
    <Table
      {...props}
      data={sortedData}
      config={updatedConfig}
    />
  )
}

export default SortableTable

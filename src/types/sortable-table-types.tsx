import type { TableConfigProps, TableProps } from './basic-table-types'

// Shape of ONE COLUMN in a <SortableTable> component
// Same as configProps, but adds sortValue
export type SortableTableConfigProps<T> = TableConfigProps<T> & {
  sortValue?: (item: T) => string | number
}

// Props for the <SortableTable> component
// but config uses SortableTableConfigProps
export type SortableTableProps<T> = TableProps<T> & {
  config: SortableTableConfigProps<T>[]
}

// What useSort() hook needs as input
export type UseSortTypes<T> = {
  data: T[]
  config: SortableTableConfigProps<T>[]
}

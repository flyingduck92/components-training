// Shape of ONE COLUMN in a basic <Table> component
export type TableConfigProps<T> = {
  label: string
  render: (item: T) => React.ReactNode
  header?: () => React.ReactNode
}

// Props for the basic <Table> component
export type TableProps<T> = {
  data: T[]
  config: TableConfigProps<T>[]
  keyFn: (item: T) => string | number
}

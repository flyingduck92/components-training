type configProps<T> = {
  label: string
  render: (item: T) => React.ReactNode
}

type TableProps<T> = {
  data: T[]
  config: configProps<T>[]
  keyFn: (item: T) => string | number
}

function Table<T>({ data, config, keyFn }: TableProps<T>) {
  const renderedHeaders = config.map((column) => (
    <th key={column.label}>{column.label}</th>
  ))

  const renderedRows = data.map((rowData) => {
    const renderedCells = config.map((column) => (
      <td
        className='p-5'
        key={column.label}
      >
        {column.render(rowData)}
      </td>
    ))

    return (
      <tr
        className='border-b'
        key={keyFn(rowData)}
      >
        {renderedCells}
      </tr>
    )
  })

  return (
    <table className='table-auto border-spacing-2'>
      <thead>
        <tr className='border-b-2'>{renderedHeaders}</tr>
      </thead>
      <tbody>{renderedRows}</tbody>
    </table>
  )
}

export default Table

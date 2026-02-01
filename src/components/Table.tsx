import { Fragment } from 'react/jsx-runtime'
import { type TableProps } from '@/types/basic-table-types'

export default function Table<T>({ data, config, keyFn }: TableProps<T>) {
  const renderedHeaders = config.map((column) => {
    if (column?.header) {
      return <Fragment key={column.label}>{column.header()}</Fragment>
    }
    return <th key={column.label}>{column.label}</th>
  })

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

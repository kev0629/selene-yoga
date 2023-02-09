import React,{useState} from 'react'
import {
  ColumnDef,
  createColumnHelper,
  flexRender,
  getCoreRowModel,
  useReactTable,
} from '@tanstack/react-table'

type HealthTable = {
  title:String,
  val:string,
}

const columnHelper = createColumnHelper<HealthTable>()

const columns = [
  columnHelper.group({
    id: 'Soin',
    header: () => <span>Soin</span>,
    columns: [
      columnHelper.accessor('title', {
        cell: info => info.getValue(),
      }),
      columnHelper.accessor('val', {
        cell: info => info.getValue(),
      })
    ],
  })
]

const defaultData: HealthTable[] = [
  {
    title:"Pratique",
    val:"Massage bien-être Tao soin Reïki",
  },
  {
    title:"Durée",
    val:"1h 1h30",
  },
  {
    title:"Tarifs",
    val:"60€ 80€",
  },
  
]

type PropsTable = {
  data:HealthTable[],
}

const PricesTable = (props:PropsTable) => {
  const [data, setData] = useState(() => [...props.data])
      const table = useReactTable({
        data,
        columns,
        getCoreRowModel: getCoreRowModel(),
      })
  console.log(table.getHeaderGroups())
  return (
      <table>
        <thead>
            <tr> 
              {table.getHeaderGroups()[0].headers.map(header => (
                <th key={header.id} colSpan={header.colSpan}>
                  {header.isPlaceholder
                    ? null
                    : flexRender(
                        header.column.columnDef.header,
                        header.getContext()
                      )}
                </th>
              ))}
            </tr>
        </thead>
        <tbody>
          {table.getRowModel().rows.map(row => (
            <tr key={row.id}>
              {row.getVisibleCells().map(cell => (
                <td key={cell.id}>
                  {flexRender(cell.column.columnDef.cell, cell.getContext())}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
        <tfoot>
          {table.getFooterGroups().map(footerGroup => (
            <tr key={footerGroup.id}>
              {footerGroup.headers.map(header => (
                <th key={header.id} colSpan={header.colSpan}>
                  {header.isPlaceholder
                    ? null
                    : flexRender(
                        header.column.columnDef.footer,
                        header.getContext()
                      )}
                </th>
              ))}
            </tr>
          ))}
        </tfoot>
      </table>
  )
}

type Props ={}
const Price = (props: Props) => {
  return (
      <PricesTable data={defaultData}/>
  )
}

export default Price
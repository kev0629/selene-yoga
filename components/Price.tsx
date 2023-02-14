import React,{ReactElement, useState} from 'react'
import {
  ColumnDef,
  createColumnHelper,
  flexRender,
  getCoreRowModel,
  useReactTable,
} from '@tanstack/react-table'

type HealthTable = {
  title:String,
  val:string | ReactElement,
}

const columnHelper = createColumnHelper<HealthTable>()

const columns = [
  columnHelper.group({
    id: 'Soin',
    header: () => <div>Soin</div>,
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
    val:<span>Massage bien-être 
      <ul>
        <li>
        Tao
        </li>
        <li>
        soin Reïki
        </li>
      </ul>
      </span>,
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
    <div className='bg-white flex justify-center rounded-md'>
      <table className='text-base bg-white '>
        <thead>
            <tr> 
              {table.getHeaderGroups()[0].headers.map(header => (
                <th key={header.id} colSpan={header.colSpan} className='font-serif font-light text-4xl border-b border-black'>
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
            <tr key={row.id} className='border-b'>
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
    </div>
  )
}

type Props ={}
const Price = (props: Props) => {
  return (
      <PricesTable data={defaultData}/>
  )
}

export default Price
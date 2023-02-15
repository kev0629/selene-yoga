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
  val1:string | ReactElement,
  val2?:string | ReactElement,
  val3?:string | ReactElement,
}

const columnHelper = createColumnHelper<HealthTable>()

const columns = [
  columnHelper.group({
    id: 'Soins',
    header: () => <div>Soins</div>,
    columns: [
      columnHelper.accessor('title', {
        cell: info => info.getValue(),
      }),
      columnHelper.accessor('val1', {
        cell: info => info.getValue(),
      }),
      columnHelper.accessor('val2', {
        cell: info => info.getValue(),
      }),
      columnHelper.accessor('val3', {
        cell: info => info.getValue(),
      })
    ],
  })
]

const defaultData: HealthTable[] = [
  {
    title:"Pratique",
    val1:<span>Massage bien-être 
      <ul className='list-disc list-inside'>
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
    val1:"1h",
    val2:"1h30",
  },
  {
    title:"Tarifs",
    val1:"60€",
    val2:"80€"
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
      <table className='text-base bg-white w-full m-2'>
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
            <tr key={row.id} className='border-t'>
              {row.getVisibleCells().map(cell => (
                <td key={cell.id} className='w-1/3'>
                  {flexRender(cell.column.columnDef.cell, cell.getContext())}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
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
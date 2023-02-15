import React,{ReactElement, useState} from 'react'
import {
  ColumnDef,
  createColumnHelper,
  flexRender,
  getCoreRowModel,
  useReactTable,
} from '@tanstack/react-table'

type TableType = {
  title:String| ReactElement,
  val1:string | ReactElement,
  val2?:string | ReactElement,
  val3?:string | ReactElement,
}

const columnHelper = createColumnHelper<TableType>()

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
      })
    ],
  })
]

const healthData: TableType[] = [
  {
    title:"Pratique",
    val1:<div className='ml-8'>
      Massage bien-être
      <ul className='list-disc list-inside'>
        <li>Tao</li>
        <li>soin Reïki</li>
      </ul>
      </div>,
  },
  {
    title:"Durée",
    val1:<div className='flex justify-around'>
      <div>1h</div>
      <div>1h30</div>
    </div>,
  },
  {
    title:"Tarifs",
    val1:<div className='flex justify-around'>
    <div>60€</div>
    <div>80€</div>
  </div>,
  },
  
]

const ConsultationData: TableType[] = [
  {
    title:"Pratique",
    val1:<ul className='ml-8'>
        <li>Thème Astral</li>
        <li>Design Humain</li>
        <li>Yi King de naissance</li>
      </ul>,
  },
  {
    title:"Durée",
    val1:<div className='flex justify-between'>
      <div className='ml-8'>2h</div>
      <div>2h (avec soins)</div>
    </div>,
  },
  {
    title:"Tarifs",
    val1:<div className='flex justify-between'>
    <div className='ml-8'>120€</div>
    <div className='mr-6'>150€</div>
  </div>,
  },
  
]

const yogaData: TableType[] = [
  {
    title:"Pratique",
    val1:<div className='flex flex-col justify-center content-center text-center'>
      <div>Groupe Adapté Astroyoga</div>
      <div className='text-xs'>3 personnes max à domicile</div>
    </div>,
  },
  {
    title:"Durée",
    val1:<div className='flex justify-around'>
    <div>1h30</div>
    <div>1h30</div>
    <div>2h</div>
  </div>
  },
  {
    title:"Tarifs à l’unité",
    val1:<div className='flex justify-around'>
    <div>15€</div>
    <div>50€</div>
    <div>30€</div>
    </div>
  },
  {
    title:"Tarifs forfait",
    val1:<div className='flex justify-around'>
    <div>150€</div>
    <div>500€</div>
    <div>300€</div>
    </div>
  },
  
]

const courseData: TableType[] = [
  {
    title:"Pratique",
    val1:<div className='flex justify-around'>
        <div>Conférence</div>
        <div><div>Ateliers</div> <div>Séminaires</div> <div>Stages</div></div>
    </div>,
  },
  {
    title:"Durée",
    val1:<div className='flex justify-around'>
    <div>1h30</div>
    <div>Variable</div>
    </div>
  },
  {
    title:"Tarifs à l’unité",
    val1:<div className='flex justify-around'>
    <div>10€</div>
    <div>Variable</div>
    </div>
  }
  
]

type PropsTable = {
  data:TableType[],
  title?:string
}

const PricesTable = (props:PropsTable) => {
  const [data, setData] = useState(() => [...props.data])
      const table = useReactTable({
        data,
        columns,
        getCoreRowModel: getCoreRowModel(),
      })
  return (
    <div className='bg-white flex justify-center rounded-md'>
      <table className='text-base bg-white w-full m-2'>
        <thead>
            <tr> 
                <th
                  colSpan={2} 
                  className='font-serif font-light text-4xl border-b border-black'
                  >
                  {props.title}
                </th>
            </tr>
        </thead>
        <tbody>
          {table.getRowModel().rows.map(row => (
            <tr key={row.id} className='border-t'>
              {row.getVisibleCells().map(cell => (
                <td key={cell.id} >
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
    <div className='flex flex-col content-center justify-center space-y-4'>
      <PricesTable data={healthData} title="Soins"/>
      <PricesTable data={ConsultationData} title="Consultations"/>
      <PricesTable data={yogaData} title="Cours de yoga"/>
      <PricesTable data={courseData} title="Formations"/>
      <div className='text-white text-xs'>
        Pour toute souscription d’une offre à domicile, proposition de contrat CESU.
      <br />
        Impossible de payer, demandez quand même ! Entre 3 et 5 consultations par mois sont à prix libres ou bénévoles.
      </div>
    </div>
  )
}

export default Price
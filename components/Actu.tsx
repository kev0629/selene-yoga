type Props = {
  text1: string,
  text2: string
}

const ActuComponent = (props: Props) => {
  return (
  <>
    <div className="flex flex-row space-x-2 text-base my-4">
      <div className="basis-1/4 border-2 rounded-xl w-20 h-20">IMAGE</div>
      <div className="basis-3/4 ">
        <div className=''>{props.text1}</div>
        <div className='uppercase text-selene-green'>{props.text2}</div>
      </div>
    </div>
  </>
  )
}

const Actu = () => {
  return(
    <>
      <ActuComponent text1='Séminaire Rencontre avec le Yi King ' text2='Mouans-Sartoux - 19 et 20 décembre 2022'/>
      <ActuComponent text1='Séminaire Rencontre avec le Yi King ' text2='Mouans-Sartoux - 19 et 20 décembre 2022'/>
      <ActuComponent text1='Séminaire Rencontre avec le Yi King ' text2='Mouans-Sartoux - 19 et 20 décembre 2022'/>
    </>
  )
}

export default Actu
import Image,{StaticImageData} from 'next/image'



type Props = {
  text1: string,
  text2: string,
  img: StaticImageData
}
const ActuComponent = (props: Props) => {
  return <>
    <div className="flex flex-row justify-center content-center space-x-2 text-base my-4">
      <div className="relative  w-32 h-24 rounded-xl overflow-hidden">
        <div className='flex flex-col justify-center center-content mt-6'>
        </div>
          <Image src={props.img} alt="Mountains sunset" fill placeholder='blur' />
      </div>
      <div className="flex flex-col justify-center">
        <div className=''>
          <div className=''>{props.text1}</div>
          <div className='uppercase text-selene-green'>{props.text2}</div>
        </div>
      </div>
    </div>
  </>;
};

export default ActuComponent
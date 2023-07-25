import Image, { StaticImageData } from "next/image";

type Props = {
  text1: string;
  text2: string;
  img: StaticImageData;
};
const ActuComponent = (props: Props) => {
  return (
    <>
      <div className="flex flex-row justify-left content-center space-x-2 text-base my-4">
        <div className="relative  w-32 h-24 rounded-xl overflow-hidden md:w-44 md:h-36">
          <div className="flex flex-col justify-center center-content mt-6"></div>
          <Image src={props.img} alt="Mountains sunset" fill />
        </div>
        <div className="flex flex-col justify-center">
          <div className="">
            <div className="text-lg">{props.text1}</div>
            <div className="uppercase text-selene-green text-xl">
              {props.text2}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ActuComponent;

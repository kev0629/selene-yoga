import React from 'react';
import Image from 'next/image';
import StarButton from './StarButton';
import Link from 'next/link';
import { CardProps } from './News';

export const Card = ({ img, title, subTitle, id, link }: CardProps) => {

  return (
    <div className="max-w-sm bg-white drop-shadow-lg w-56 m-2">
      <div className="flex justify-center relative">
        <Image className="w-56 h-32 object-cover object-center" src={img} alt="" width={224} height={128} />
      </div>
      <div className=" flex flex-col px-5 pt-5">
        <h5 className="mb-2 text-2xl text-center text-black">{title}</h5>
        <p className="mb-3 font-normal text-center text-gray-700">{subTitle}</p>
        <div className=' flex justify-center'>
          <Link key={id} href={`/posts/${link}`} passHref>
            <StarButton title='Lire la suite' className='px-3 py-2 m-2' />
          </Link>
        </div>

      </div>
    </div>
  );
};

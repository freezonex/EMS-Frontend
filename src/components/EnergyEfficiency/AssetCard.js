import React from 'react';
import Image from 'next/image';
import { Heading } from '@carbon/react';

function AssetCard({ name, location, onClick }) {
  return (
    <div className="bg-[#F4F4F4] p-4 cursor-pointer" onClick={onClick}>
      <div className="justify-center">
        <Image src="/asset.png" width={300} height={250} />
      </div>
      <Heading className="text-base font-normal leading-7 text-left">
        {name}
      </Heading>
      <Heading className="text-xs font-normal leading-[18px] tracking-[0.16px] text-left mt-1">
        Location: {location}
      </Heading>
    </div>
  );
}

export default AssetCard;

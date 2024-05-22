'use client';
import { Heading } from '@carbon/react';
import React from 'react';

function SimpleCard({ label, value, unit }) {
  return (
    <div className="bg-white p-4 shadow rounded-lg flex flex-col justify-between">
      <Heading className="text-sm not-italic font-semibold leading-[18px] tracking-0.16">
        {label}
      </Heading>
      <div className="flex items-end justify-between mt-8">
        <Heading className="lg:text-5xl md:text-4xl sm:text-3xl font-light ">
          {value}
        </Heading>
        <Heading className="text-sm">{unit}</Heading>
      </div>
    </div>
  );
}

export default SimpleCard;

'use client';
import React from 'react';
import { Heading, Breadcrumb, BreadcrumbItem } from '@carbon/react';

import { useRouter } from 'next/navigation';

function Page() {
  const router = useRouter();
  return (
    <div>
      <Breadcrumb>
        <BreadcrumbItem className="cursor-pointer">
          <a
            onClick={() => {
              router.push(`${process.env.PATH_PREFIX}/dashboard`);
            }}
          >
            Home
          </a>
        </BreadcrumbItem>
        <BreadcrumbItem className="cursor-pointer">
          <a
            onClick={() => {
              router.push(`${process.env.PATH_PREFIX}/simulation`);
            }}
          >
            Simulation
          </a>
        </BreadcrumbItem>
      </Breadcrumb>

      <div className="bx--col-lg-16 flex justify-between items-center">
        <div>
          <Heading className="mt-2 text-[28px] font-normal">Simulation</Heading>
          <Heading className="mt-1 text-sm">
            All company assets will be displayed here.
          </Heading>
        </div>
      </div>

      <div className="mt-[3rem]"></div>
    </div>
  );
}

export default Page;

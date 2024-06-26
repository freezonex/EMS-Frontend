'use client';
import React from 'react';
import { Heading, Breadcrumb, BreadcrumbItem } from '@carbon/react';
import '@carbon/charts-react/styles.css';
import { useRouter } from 'next/navigation';
import AlarmTable from '@/components/Alarm/AlarmTable';
import AlarmContent from '@/components/Alarm/AlarmContent';

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
              router.push(`${process.env.PATH_PREFIX}/alarm`);
            }}
          >
            Alarm
          </a>
        </BreadcrumbItem>
      </Breadcrumb>

      <div className="bx--col-lg-16 flex justify-between items-center">
        <div>
          <Heading className="mt-2 text-[28px] font-normal">Alarm</Heading>
          <Heading className="mt-1 text-sm">
            Hi, welcome to Asset Performance System.
          </Heading>
        </div>
      </div>
      <AlarmContent />
    </div>
  );
}

export default Page;

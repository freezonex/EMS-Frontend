'use client';
import React from 'react';
import { Heading, Breadcrumb, BreadcrumbItem } from '@carbon/react';

import { useRouter, useSearchParams } from 'next/navigation';
import AssetDetailPanel from '@/components/EnergyEfficiency/AssetDetailPanel';

function Page() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const assetName = searchParams.get('assetName');
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
              router.push(`${process.env.PATH_PREFIX}/efficiency`);
            }}
          >
            Energy Efficiency
          </a>
        </BreadcrumbItem>
        <BreadcrumbItem className="cursor-pointer">
          <a
            onClick={() => {
              router.push(`${process.env.PATH_PREFIX}/efficiency/detail`);
            }}
          >
            {assetName}
          </a>
        </BreadcrumbItem>
      </Breadcrumb>

      <div className="bx--col-lg-16 flex justify-between items-center">
        <div>
          <Heading className="mt-2 text-[28px] font-normal">
            {assetName}
          </Heading>
          <Heading className="mt-1 text-sm">
            Asset details are displayed here.
          </Heading>
        </div>
      </div>

      <div className="mt-[3rem]">
        <AssetDetailPanel assetName={assetName} />
      </div>
    </div>
  );
}

export default Page;

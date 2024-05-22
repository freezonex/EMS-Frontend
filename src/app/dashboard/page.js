'use client';
import React from 'react';
import { Heading, Breadcrumb, BreadcrumbItem } from '@carbon/react';
import {
  SimpleBarChart,
  AreaChart,
  PieChart,
  StackedBarChart,
  LineChart,
} from '@carbon/charts-react';
import '@carbon/charts-react/styles.css';
import { useRouter } from 'next/navigation';
import SimpleCard from '@/components/Dashboard/SimpleCard';
import {
  barchartData,
  barchartOptions,
  areaChartData,
  areaChartOptions,
  pieChartData,
  pieChartOptions,
  stackedBarData,
  stackedBarOptions,
  lineChartData,
  lineChartOptions,
} from './barchart';
import {
  Select,
  SelectTrigger,
  SelectContent,
  SelectValue,
  SelectItem,
} from '@/components/ui/select';
import InsightsTable from '@/components/Dashboard/InsightsTable';
const headers = [
  { key: 'no', header: 'No' },
  { key: 'workshop', header: 'Workshop' },
];
const rows = [
  { no: 1, workshop: 'Workshop 1' },
  { no: 2, workshop: 'Workshop 2' },
  { no: 3, workshop: 'Workshop 3' },
  { no: 4, workshop: 'Workshop 4' },
  { no: 5, workshop: 'Workshop 5' },
  { no: 6, workshop: 'Workshop 6' },
  { no: 7, workshop: 'Workshop 7' },
  { no: 8, workshop: 'Workshop 8' },
  { no: 9, workshop: 'Workshop 9' },
  { no: 10, workshop: 'Workshop 10' },
];
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
      </Breadcrumb>

      <div className="bx--col-lg-16 flex justify-between items-center">
        <div>
          <Heading className="mt-2 text-[28px] font-normal">Dashboard</Heading>
          <Heading className="mt-1 text-sm">
            Hi, welcome to Asset Performance System.
          </Heading>
        </div>
      </div>
      <div className="flex mt-8 items-start gap-4 h-[446px]">
        <div className="flex flex-col w-3/4 justify-between min-h-[446px] max-h-[446px]">
          <div class="grid grid-cols-3 gap-4">
            <SimpleCard label="Total" value="5967" unit="tce" />
            <SimpleCard label="Goal" value="2031" unit="tce" />
            <SimpleCard label="Challenge" value="4560" unit="tce" />
          </div>
          <div className="mt-6 bg-white p-4 shadow rounded-lg">
            <SimpleBarChart data={barchartData} options={barchartOptions} />
          </div>
        </div>

        <div className="w-1/4 bg-white p-4 shadow rounded-lg flex flex-col min-h-[446px] max-h-[446px]">
          <div className="flex justify-between items-center mb-2">
            <Heading className="text-sm not-italic font-semibold leading-[18px] tracking-0.16">
              Insights
            </Heading>
            <Select>
              <SelectTrigger className="text-xs w-[100px] h-[23px] bg-[#F4F4F4] border-none">
                <SelectValue placeholder="Select" />
              </SelectTrigger>
              <SelectContent className="bg-white">
                <SelectItem className="text-xs" value="light">
                  Light
                </SelectItem>
                <SelectItem className="text-xs" value="dark">
                  Dark
                </SelectItem>
                <SelectItem className="text-xs" value="system">
                  System
                </SelectItem>
              </SelectContent>
            </Select>
          </div>
          <InsightsTable headers={headers} rows={rows} />
        </div>
      </div>
      <div className="mt-6 w-full bg-white p-4 shadow rounded-lg flex flex-col ">
        <AreaChart data={areaChartData} options={areaChartOptions} />
      </div>
      <div className="grid grid-cols-3 mt-6 flex w-full gap-4">
        <div className="shrink bg-white p-4 shadow rounded-lg">
          <PieChart data={pieChartData} options={pieChartOptions} />
        </div>
        <div className="shrink  bg-white p-4 shadow rounded-lg">
          <StackedBarChart data={stackedBarData} options={stackedBarOptions} />
        </div>
        <div className="shrink  bg-white p-4 shadow rounded-lg">
          <LineChart data={lineChartData} options={lineChartOptions} />
        </div>
      </div>
    </div>
  );
}

export default Page;

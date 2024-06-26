import React, { useCallback, useState } from 'react';
import { Search, Pagination } from '@carbon/react';
import AssetCard from './AssetCard';
import { useRouter, useSearchParams } from 'next/navigation';

const assets = [
  { name: 'Equipment 01', location: 'F02-W03-B03' },
  { name: 'Equipment 02', location: 'F02-W03-B04' },
  { name: 'Equipment 03', location: 'F02-W03-B05' },
  { name: 'Equipment 04', location: 'F02-W03-B06' },
  { name: 'Equipment 05', location: 'F02-W03-B07' },
  { name: 'Equipment 06', location: 'F02-W03-B08' },
  { name: 'Equipment 07', location: 'F02-W03-B09' },
  { name: 'Equipment 08', location: 'F02-W03-B10' },
  { name: 'Equipment 09', location: 'F02-W03-B11' },
  { name: 'Equipment 10', location: 'F02-W03-B12' },
  { name: 'Equipment 11', location: 'F02-W03-B13' },
  { name: 'Equipment 12', location: 'F02-W03-B14' },
  { name: 'Equipment 13', location: 'F02-W03-B15' },
  { name: 'Equipment 14', location: 'F02-W03-B16' },
  { name: 'Equipment 15', location: 'F02-W03-B17' },
];

function EnergyEffiencyPanel() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [page, setPage] = useState(1);
  const [pageSize, setPageSize] = useState(15);
  const [total, setTotal] = useState(15);
  const createQueryString = useCallback(
    (name, value) => {
      const params = new URLSearchParams(searchParams.toString());
      params.set(name, value);

      return params.toString();
    },
    [searchParams]
  );

  return (
    <div>
      <Search
        size="lg"
        placeholder="Find your assets"
        labelText="Search"
        closeButtonLabelText="Clear search input"
        id="search-1"
        onChange={() => {}}
        onKeyDown={() => {}}
      />
      <div className="bg-white w-full grid grid-cols-5 gap-4 p-4">
        {assets.map((asset) => (
          <AssetCard
            name={asset.name}
            location={asset.location}
            onClick={() => {
              console.log('click');
              router.push(
                `${process.env.PATH_PREFIX}/efficiency/detail?` +
                  createQueryString('assetName', asset.name)
              );
            }}
          />
        ))}
      </div>
      <Pagination
        className="border border-solid border-[#C6C6C6]"
        backwardText="Previous page"
        forwardText="Next page"
        itemsPerPageText=""
        page={page}
        pageNumberText="Page Number"
        pageSize={pageSize}
        pageSizes={[15, 30, 45]}
        totalItems={total}
        onChange={({ page, pageSize }) => {
          setPage(page);
          setPageSize(pageSize);
        }}
      />
    </div>
  );
}

export default EnergyEffiencyPanel;

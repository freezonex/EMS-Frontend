'use client';
import React, { useState } from 'react';
import {
  Table,
  TableHead,
  TableRow,
  TableHeader,
  TableBody,
  TableCell,
  Pagination,
  Button,
  Tag,
} from '@carbon/react';
import { create } from 'd3';
const headers = [
  { key: 'sourceId', header: 'Source ID' },
  { key: 'type', header: 'Type' },
  { key: 'level', header: 'Level' },
  { key: 'energyCode', header: 'Energy Code' },
  { key: 'coalDiscount', header: 'Coal Discount' },
  { key: 'carbonEmission', header: 'Carbon Emission' },
  { key: 'unit', header: 'Unit' },
  { key: 'description', header: 'Description' },
  { key: 'createUser', header: 'Create User' },
  { key: 'action', header: 'Action' },
];
function EnergySourceTable() {
  const [page, setPage] = useState(1);
  const [pageSize, setPageSize] = useState(10);
  const [total, setTotal] = useState(0);
  const rows = [
    {
      sourceId: 'S#24022901',
      type: 'Water',
      level: '3',
      energyCode: 'Water',
      coalDiscount: '50',
      carbonEmission: '3455',
      unit: 'T',
      description: 'adge4wdadf',
      createUser: 'John',
    },
    {
      sourceId: 'S#24022901',
      type: 'Water',
      level: '3',
      energyCode: 'Water',
      coalDiscount: '50',
      carbonEmission: '3455',
      unit: 'T',
      description: 'adge4wdadf',
      createUser: 'John',
    },
    {
      sourceId: 'S#24022901',
      type: 'Water',
      level: '3',
      energyCode: 'Water',
      coalDiscount: '50',
      carbonEmission: '3455',
      unit: 'T',
      description: 'adge4wdadf',
      createUser: 'John',
    },
    {
      sourceId: 'S#24022901',
      type: 'Water',
      level: '3',
      energyCode: 'Water',
      coalDiscount: '50',
      carbonEmission: '3455',
      unit: 'T',
      description: 'adge4wdadf',
      createUser: 'John',
    },
    {
      sourceId: 'S#24022901',
      type: 'Water',
      level: '3',
      energyCode: 'Water',
      coalDiscount: '50',
      carbonEmission: '3455',
      unit: 'T',
      description: 'adge4wdadf',
      createUser: 'John',
    },
    {
      sourceId: 'S#24022901',
      type: 'Water',
      level: '3',
      energyCode: 'Water',
      coalDiscount: '50',
      carbonEmission: '3455',
      unit: 'T',
      description: 'adge4wdadf',
      createUser: 'John',
    },
    {
      sourceId: 'S#24022901',
      type: 'Water',
      level: '3',
      energyCode: 'Water',
      coalDiscount: '50',
      carbonEmission: '3455',
      unit: 'T',
      description: 'adge4wdadf',
      createUser: 'John',
    },
    {
      sourceId: 'S#24022901',
      type: 'Water',
      level: '3',
      energyCode: 'Water',
      coalDiscount: '50',
      carbonEmission: '3455',
      unit: 'T',
      description: 'adge4wdadf',
      createUser: 'John',
    },
    {
      sourceId: 'S#24022901',
      type: 'Water',
      level: '3',
      energyCode: 'Water',
      coalDiscount: '50',
      carbonEmission: '3455',
      unit: 'T',
      description: 'adge4wdadf',
      createUser: 'John',
    },
    {
      sourceId: 'S#24022901',
      type: 'Water',
      level: '3',
      energyCode: 'Water',
      coalDiscount: '50',
      carbonEmission: '3455',
      unit: 'T',
      description: 'adge4wdadf',
      createUser: 'John',
    },
  ];
  return (
    <div className="mt-[2rem] mb-[2rem]">
      <Table size="lg" useZebraStyles={false}>
        <TableHead>
          <TableRow>
            {headers.map((header) => (
              <TableHeader
                id={header.key}
                key={header.header}
                className="border border-solid border-[#C6C6C6]"
              >
                {header.header}
              </TableHeader>
            ))}
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.id}>
              {headers.map((header) => {
                if (header.key === 'action') {
                  return (
                    <TableCell
                      key={header.key}
                      className="border border-solid border-[#C6C6C6]"
                    >
                      <Button kind="ghost">Edit</Button>
                      <Button kind="danger--ghost">Delete</Button>
                    </TableCell>
                  );
                }
                return (
                  <TableCell
                    key={header.key}
                    className="border border-solid border-[#C6C6C6]"
                  >
                    {row[header.key]}
                  </TableCell>
                );
              })}
            </TableRow>
          ))}
        </TableBody>
      </Table>

      <Pagination
        className="border border-solid border-[#C6C6C6] border-t-transparent"
        backwardText="Previous page"
        forwardText="Next page"
        itemsPerPageText="Items per page:"
        page={page}
        pageNumberText="Page Number"
        pageSize={pageSize}
        pageSizes={[10, 20, 30, 40, 50]}
        totalItems={total}
        onChange={({ page, pageSize }) => {
          setPage(page);
          setPageSize(pageSize);
        }}
      />
    </div>
  );
}

export default EnergySourceTable;

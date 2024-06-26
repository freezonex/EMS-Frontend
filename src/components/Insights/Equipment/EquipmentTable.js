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

const headers = [
  { key: 'workshopId', header: 'Workshop ID' },
  { key: 'name', header: 'Name' },
  { key: 'location', header: 'Location' },
  { key: 'status', header: 'Status' },
  { key: 'description', header: 'Description' },
  { key: 'action', header: 'Action' },
];
function EquipmentTable() {
  const [page, setPage] = useState(1);
  const [pageSize, setPageSize] = useState(10);
  const [total, setTotal] = useState(0);
  const rows = [
    {
      workshopId: 'S#24022901',
      name: 'Equipment 1',
      location: 'F01-W03-B03',
      status: 'Running',
      description: 'adge4wdadf',
    },
    {
      workshopId: 'S#24022901',
      name: 'Equipment 1',
      location: 'F01-W03-B03',
      status: 'Running',
      description: 'adge4wdadf',
    },
    {
      workshopId: 'S#24022901',
      name: 'Equipment 1',
      location: 'F01-W03-B03',
      status: 'Running',
      description: 'adge4wdadf',
    },
    {
      workshopId: 'S#24022901',
      name: 'Equipment 1',
      location: 'F01-W03-B03',
      status: 'Running',
      description: 'adge4wdadf',
    },
    {
      workshopId: 'S#24022901',
      name: 'Equipment 1',
      location: 'F01-W03-B03',
      status: 'Running',
      description: 'adge4wdadf',
    },
    {
      workshopId: 'S#24022901',
      name: 'Equipment 1',
      location: 'F01-W03-B03',
      status: 'Running',
      description: 'adge4wdadf',
    },
    {
      workshopId: 'S#24022901',
      name: 'Equipment 1',
      location: 'F01-W03-B03',
      status: 'Running',
      description: 'adge4wdadf',
    },
    {
      workshopId: 'S#24022901',
      name: 'Equipment 1',
      location: 'F01-W03-B03',
      status: 'Running',
      description: 'adge4wdadf',
    },
    {
      workshopId: 'S#24022901',
      name: 'Equipment 1',
      location: 'F01-W03-B03',
      status: 'Running',
      description: 'adge4wdadf',
    },
    {
      workshopId: 'S#24022901',
      name: 'Equipment 1',
      location: 'F01-W03-B03',
      status: 'Running',
      description: 'adge4wdadf',
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
                if (header.key === 'status') {
                  return (
                    <TableCell
                      key={header.key}
                      className="border border-solid border-[#C6C6C6]"
                    >
                      <Tag type="blue">{row[header.key]}</Tag>
                    </TableCell>
                  );
                }
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

export default EquipmentTable;

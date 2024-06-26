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
  { key: 'alarmId', header: 'Alarm ID' },
  { key: 'equipment', header: 'Equipment' },
  { key: 'energyConsumption', header: 'Energy Consumption' },
  { key: 'operator', header: 'Operator' },
  { key: 'details', header: 'Details ' },
  { key: 'alarmLevel', header: 'Alarm Level' },
  { key: 'status', header: 'Status' },
  { key: 'action', header: 'Action' },
];
function AlarmTable() {
  const [page, setPage] = useState(1);
  const [pageSize, setPageSize] = useState(10);
  const [total, setTotal] = useState(0);
  const rows = [
    {
      alarmId: 'S#24022901',
      equipment: 'Workshop 1',
      energyConsumption: '50',
      operator: 'John Doe',
      details: 'Details',
      alarmLevel: 'High',
      status: 'Active',
      action: 'Action',
    },
    {
      alarmId: 'S#24022901',
      equipment: 'Workshop 1',
      energyConsumption: '50',
      operator: 'John Doe',
      details: 'Details',
      alarmLevel: 'High',
      status: 'Active',
      action: 'Action',
    },
    {
      alarmId: 'S#24022901',
      equipment: 'Workshop 1',
      energyConsumption: '50',
      operator: 'John Doe',
      details: 'Details',
      alarmLevel: 'High',
      status: 'Active',
      action: 'Action',
    },
    {
      alarmId: 'S#24022901',
      equipment: 'Workshop 1',
      energyConsumption: '50',
      operator: 'John Doe',
      details: 'Details',
      alarmLevel: 'High',
      status: 'Active',
      action: 'Action',
    },
    {
      alarmId: 'S#24022901',
      equipment: 'Workshop 1',
      energyConsumption: '50',
      operator: 'John Doe',
      details: 'Details',
      alarmLevel: 'High',
      status: 'Active',
      action: 'Action',
    },
    {
      alarmId: 'S#24022901',
      equipment: 'Workshop 1',
      energyConsumption: '50',
      operator: 'John Doe',
      details: 'Details',
      alarmLevel: 'High',
      status: 'Active',
      action: 'Action',
    },
    {
      alarmId: 'S#24022901',
      equipment: 'Workshop 1',
      energyConsumption: '50',
      operator: 'John Doe',
      details: 'Details',
      alarmLevel: 'High',
      status: 'Active',
      action: 'Action',
    },
    {
      alarmId: 'S#24022901',
      equipment: 'Workshop 1',
      energyConsumption: '50',
      operator: 'John Doe',
      details: 'Details',
      alarmLevel: 'High',
      status: 'Active',
      action: 'Action',
    },
    {
      alarmId: 'S#24022901',
      equipment: 'Workshop 1',
      energyConsumption: '50',
      operator: 'John Doe',
      details: 'Details',
      alarmLevel: 'High',
      status: 'Active',
      action: 'Action',
    },
    {
      alarmId: 'S#24022901',
      equipment: 'Workshop 1',
      energyConsumption: '50',
      operator: 'John Doe',
      details: 'Details',
      alarmLevel: 'High',
      status: 'Active',
      action: 'Action',
    },
    {
      alarmId: 'S#24022901',
      equipment: 'Workshop 1',
      energyConsumption: '50',
      operator: 'John Doe',
      details: 'Details',
      alarmLevel: 'High',
      status: 'Active',
      action: 'Action',
    },
  ];
  return (
    <div className="mt-[2rem]">
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
              {Object.keys(row)
                .filter((key) => key !== 'id')
                .map((key) => {
                  if (key === 'status') {
                    return (
                      <TableCell
                        key={key}
                        className="border border-solid border-[#C6C6C6]"
                      >
                        <Tag type="blue">{row[key]}</Tag>
                      </TableCell>
                    );
                  }
                  if (key === 'action') {
                    return (
                      <TableCell
                        key={key}
                        className="border border-solid border-[#C6C6C6]"
                      >
                        <Button kind="danger--ghost" className="text-red">
                          Delete
                        </Button>
                      </TableCell>
                    );
                  }
                  return (
                    <TableCell
                      key={key}
                      className="border border-solid border-[#C6C6C6]"
                    >
                      {row[key]}
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

export default AlarmTable;

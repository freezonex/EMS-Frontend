'use client';
import React from 'react';
import {
  StructuredListWrapper,
  StructuredListHead,
  StructuredListRow,
  StructuredListCell,
  StructuredListBody,
} from '@carbon/react';

function InsightsTable({ headers, rows }) {
  return (
    <StructuredListWrapper isCondensed>
      <StructuredListHead>
        <StructuredListRow
          head
          className="flex justify-between pr-4 pl-3 lg:pr-10"
        >
          {headers.map((header, index) => (
            <StructuredListCell
              className="text-[13px]"
              head
              key={header.key}
              onClick={() => {}}
            >
              {header.header}
            </StructuredListCell>
          ))}
        </StructuredListRow>
      </StructuredListHead>
      <StructuredListBody>
        {rows.map((row, index) => (
          <StructuredListRow
            className="flex justify-between pr-4 pl-3 lg:pr-10"
            key={index}
          >
            {headers.map((header) => {
              return (
                <StructuredListCell className="text-xs" key={header.key}>
                  {row[header.key]}
                </StructuredListCell>
              );
            })}
          </StructuredListRow>
        ))}
      </StructuredListBody>
    </StructuredListWrapper>
  );
}

export default InsightsTable;

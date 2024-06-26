import React, { useState } from 'react';
import { Search, Pagination } from '@carbon/react';
import AssetCard from './AssetCard';
import Image from 'next/image';
import styles from './AssetDetail.module.scss';
import { GroupedBarChart } from '@carbon/charts-react';
import { groupedBarData, groupedBarOptions } from './AssetChartConfig';

function AssetDetailPanel({ assetName }) {
  return (
    <div className="bg-white w-full gap-4 p-4 flex items-center">
      <div className="bg-white w-1/3">
        <Image src="/asset.png" width={1200} height={800} alt="assetImage" />
      </div>
      <div className="w-2/3 gap-4">
        <table className={styles.customTable}>
          <tr>
            <th>Real-time Efficiency</th>
            <td>90%</td>
          </tr>
          <tr>
            <th>Real-time Efficiency</th>
            <td>90%</td>
          </tr>
          <tr>
            <th>Warning</th>
            <td className={styles.warning}>Exceedance Monitored</td>
          </tr>
        </table>

        <div className={styles.sectionHeader}>
          <th>Equipment Status</th>
        </div>
        <table className={styles.customTable}>
          <tr>
            <th>Volume of Flow</th>
            <td>1000 m3/t</td>
          </tr>
          <tr>
            <th>Electric Current</th>
            <td>2A</td>
          </tr>
          <tr>
            <th>Pressure</th>
            <td>1020 Pa</td>
          </tr>
          <tr>
            <th>Temperature</th>
            <td>45 degree</td>
          </tr>
        </table>

        <div className={styles.sectionHeader}>
          <th>Stability Rate</th>
        </div>
        <div className={styles.chartContainer}>
          <GroupedBarChart
            data={groupedBarData}
            options={groupedBarOptions}
          ></GroupedBarChart>
        </div>
      </div>
    </div>
  );
}

export default AssetDetailPanel;

import React from 'react';
import ElectricityCard from './ElectricityCard';
import WaterCard from './WaterCard';
import { HeatmapChart } from '@carbon/charts-react';
import { heatmapData, heatmapOptions } from './HeatmapConfig';
function EnergyConsumptionPanel() {
  return (
    <div className="gap-4 flex">
      <div className="w-1/4 bg-white p-2">
        <ElectricityCard />
      </div>
      <div className="w-1/4 bg-white p-2 ">
        <WaterCard />
      </div>
      <div className="w-1/2 bg-white p-4 ">
        <HeatmapChart data={heatmapData} options={heatmapOptions} />
      </div>
    </div>
  );
}

export default EnergyConsumptionPanel;

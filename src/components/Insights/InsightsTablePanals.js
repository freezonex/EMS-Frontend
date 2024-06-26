import React from 'react';
import {
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
  TextInput,
  Button,
} from '@carbon/react';
import EnergySourcePanel from './EnergySource/EnergySourcePanel';
import EquipmentPanel from './Equipment/EquipmentPanel';
import WorkshopPanel from './Workshop/WorkshopPanel';

function InsightsTablePanals() {
  return (
    <Tabs>
      <TabList aria-label="List of tabs" contained>
        <Tab>Energy Source</Tab>
        <Tab>Equipment</Tab>
        <Tab>Workshop</Tab>
      </TabList>
      <TabPanels>
        <TabPanel>
          <EnergySourcePanel />
        </TabPanel>
        <TabPanel>
          <EquipmentPanel />
        </TabPanel>
        <TabPanel>
          <WorkshopPanel />
        </TabPanel>
      </TabPanels>
    </Tabs>
  );
}

export default InsightsTablePanals;

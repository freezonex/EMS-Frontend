import React from 'react';
import WaterIcon from './assets/WaterIcon';
import styles from './EnergyConsumptionPanel.module.scss';
import './EnergyConsumptionPanel.module.scss';
import { ProgressBar } from '@carbon/react';

function ElectricityCard() {
  return (
    <div className={styles.cardContainer}>
      <div className="flex gap-2 items-center mb-3">
        <WaterIcon />
        <div className={styles.sectionHeader}>Water</div>
      </div>
      <div className={styles.blockContainer}>
        <div className={styles.cardNormalText}>Today</div>
        <div className="flex items-baseline gap-1">
          <div className={styles.cardHighlightNumber}>6040.0</div>
          <div className={styles.cardNormalText}>kw.h</div>
        </div>
      </div>
      <div className={styles.blockContainer}>
        <div className={styles.cardNormalText}>Yesterday</div>
        <div className="flex items-baseline gap-1">
          <div className={styles.cardNormalNumber}>3393.2</div>
          <div className={styles.cardNormalText}>kw.h</div>
        </div>
      </div>

      <div className={styles.blockContainer} style={{ marginTop: '1rem' }}>
        <div className="w-full">
          <div className={styles.cardNormalText}>This Month</div>
          <div className="flex gap-4 items-end justify-between">
            <ProgressBar
              label="this month"
              className="w-1/2 h-3"
              hideLabel={true}
              value={55}
            />
            <div className={styles.cardNormalText}>293714.4 kw.h</div>
          </div>
          <div className="mt-3">
            <div className={styles.cardNormalText}>Last Month</div>
            <div className="flex gap-4 items-end justify-between">
              <ProgressBar
                label="this month"
                className="w-1/2 h-3"
                hideLabel={true}
                value={75}
              />
              <div className={styles.cardNormalText}>310514.4 kw.h</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ElectricityCard;

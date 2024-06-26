import React, { useState } from 'react';
import { Button, TextInput } from '@carbon/react';
import { Add, Search, Close } from '@carbon/icons-react';
import styles from './AlarmContent.module.scss';
import AlarmTable from './AlarmTable';

function AlarmSearch() {
  const [formValue, setFormValue] = useState({
    alarmId: '',
    equipment: '',
    energyConsumption: '',
    operator: '',
  });
  const [isSearchClicked, setIsSearchClicked] = useState(false);
  const [refresh, setRefresh] = useState({});
  const [editModalIsopen, setEditModalIsopen] = useState(false);
  const initFormValue = () => {
    setFormValue({
      alarmId: '',
      equipment: '',
      energyConsumption: '',
      operator: '',
    });
  };
  const FormValueChange = (e) => {
    const { id, value } = e.target;
    setFormValue({ ...formValue, [id]: value });
  };
  return (
    <>
      <div className={styles.searchInputParent}>
        <div className={styles.searchInput}>
          <TextInput
            className="flex-auto w-20"
            labelText="Alarm ID"
            id="alarmId"
            size="sm"
            placeholder="Alarm ID"
            value={formValue.alarmId}
            onChange={(e) => {
              FormValueChange(e);
            }}
          />
          <TextInput
            className="flex-auto w-20"
            labelText="Equipment"
            id="equipment"
            size="sm"
            placeholder="Equipment"
            value={formValue.equipment}
            onChange={(e) => {
              FormValueChange(e);
            }}
          />
        </div>
        <div className={styles.searchInput}>
          <TextInput
            className="flex-auto w-20"
            labelText="Energy Consumption"
            id="energyConsumption"
            size="sm"
            placeholder="Energy Consumption"
            value={formValue.energyConsumption}
            onChange={(e) => {
              FormValueChange(e);
            }}
          />
          <TextInput
            className="flex-auto w-20"
            labelText="Operator"
            id="operator"
            size="sm"
            placeholder="Operator"
            value={formValue.operator}
            onChange={(e) => {
              FormValueChange(e);
            }}
          />
        </div>
        <div className={styles.searchBtnParent}>
          <Button
            onClick={() => {
              setIsSearchClicked(true);
            }}
            style={{ backgroundColor: '#393939' }}
            isExpressive
            size="sm"
            renderIcon={Search}
            iconDescription="Search"
          >
            Search
          </Button>
          <Button
            onClick={() => {
              initFormValue();
            }}
            style={{ backgroundColor: '#C6C6C6' }}
            isExpressive
            size="sm"
            renderIcon={Close}
            iconDescription="Close"
          >
            Cancel
          </Button>
        </div>
      </div>

      <AlarmTable />
    </>
  );
}

export default AlarmSearch;

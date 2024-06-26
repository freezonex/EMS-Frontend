import React, { useState } from 'react';
import { Button, TextInput } from '@carbon/react';
import { Add, Search, Close } from '@carbon/icons-react';
import styles from '../SearchBar.module.scss';
import EnergySourceTable from './EnergySourceTable';

function EnergySourcePanel() {
  const [formValue, setFormValue] = useState({
    sourceId: '',
    type: '',
    energyCode: '',
    createUser: '',
  });
  const [isSearchClicked, setIsSearchClicked] = useState(false);
  const [refresh, setRefresh] = useState({});
  const [editModalIsopen, setEditModalIsopen] = useState(false);
  const initFormValue = () => {
    setFormValue({
      sourceId: '',
      type: '',
      energyCode: '',
      createUser: '',
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
            labelText="Source ID"
            id="sourceId"
            size="sm"
            placeholder="Source ID"
            value={formValue.sourceId}
            onChange={(e) => {
              FormValueChange(e);
            }}
          />
          <TextInput
            className="flex-auto w-20"
            labelText="Type"
            id="type"
            size="sm"
            placeholder="Type"
            value={formValue.type}
            onChange={(e) => {
              FormValueChange(e);
            }}
          />
        </div>
        <div className={styles.searchInput}>
          <TextInput
            className="flex-auto w-20"
            labelText="Energy Code"
            id="energyCode"
            size="sm"
            placeholder="Energy Code"
            value={formValue.energyCode}
            onChange={(e) => {
              FormValueChange(e);
            }}
          />
          <TextInput
            className="flex-auto w-20"
            labelText="Create User"
            id="createUser"
            size="sm"
            placeholder="Create User"
            value={formValue.createUser}
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

      <EnergySourceTable />
    </>
  );
}

export default EnergySourcePanel;

import React, { useState } from 'react';
import { Button, TextInput } from '@carbon/react';
import { Add, Search, Close } from '@carbon/icons-react';
import styles from '../SearchBar.module.scss';
import EquipmentTable from './EquipmentTable';

function EquipmentPanel() {
  const [formValue, setFormValue] = useState({
    workshopId: '',
    name: '',
    location: '',
    status: '',
  });
  const [isSearchClicked, setIsSearchClicked] = useState(false);
  const [refresh, setRefresh] = useState({});
  const [editModalIsopen, setEditModalIsopen] = useState(false);
  const initFormValue = () => {
    setFormValue({
      workshopId: '',
      name: '',
      location: '',
      status: '',
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
            labelText="Workshop ID"
            id="workshopId"
            size="sm"
            placeholder="Workshop ID"
            value={formValue.workshopId}
            onChange={(e) => {
              FormValueChange(e);
            }}
          />
          <TextInput
            className="flex-auto w-20"
            labelText="Name"
            id="name"
            size="sm"
            placeholder="Name"
            value={formValue.name}
            onChange={(e) => {
              FormValueChange(e);
            }}
          />
        </div>
        <div className={styles.searchInput}>
          <TextInput
            className="flex-auto w-20"
            labelText="Location"
            id="location"
            size="sm"
            placeholder="Location"
            value={formValue.location}
            onChange={(e) => {
              FormValueChange(e);
            }}
          />
          <TextInput
            className="flex-auto w-20"
            labelText="Status"
            id="status"
            size="sm"
            placeholder="Status"
            value={formValue.status}
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

      <EquipmentTable />
    </>
  );
}

export default EquipmentPanel;

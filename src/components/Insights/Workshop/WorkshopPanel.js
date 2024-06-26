import React, { useState } from 'react';
import { Button, TextInput } from '@carbon/react';
import { Add, Search, Close } from '@carbon/icons-react';
import styles from '../SearchBar.module.scss';
import WorkshopTable from './WorkshopTable';

function WorkshopPanel() {
  const [formValue, setFormValue] = useState({
    workshopId: '',
    name: '',
    type: '',
    status: '',
  });
  const [isSearchClicked, setIsSearchClicked] = useState(false);
  const [refresh, setRefresh] = useState({});
  const [editModalIsopen, setEditModalIsopen] = useState(false);
  const initFormValue = () => {
    setFormValue({
      workshopId: '',
      name: '',
      type: '',
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
            labelText="Type"
            id="type"
            size="sm"
            placeholder="Type"
            value={formValue.type}
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

      <WorkshopTable />
    </>
  );
}

export default WorkshopPanel;

import React from 'react'
import { Table } from '../Table/Table'
import { SignOut } from '../SignOut/SignOut'
import { NewWordForm } from '../NewWordForm/NewWordForm'

import './MainContent.scss'

export const MainContent = () => {

  return (
    <>
      <div className="mainContent">
        <div className="column">
          <Table />
        </div>
        <div className="column">
          <NewWordForm />
        </div>
        <SignOut />
      </div>
    </>
  );
}

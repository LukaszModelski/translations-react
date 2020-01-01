import React from 'react'
import { useSelector } from 'react-redux'
import { Table } from '../Table/Table'
import { SignOut } from '../SignOut/SignOut'
import { TestTable } from '../TestTable/TestTable'
import { NewWordForm } from '../NewWordForm/NewWordForm'
import { Filters } from "../Filters/Filters";

import './MainContent.scss'

export const MainContent = () => {
  const totalWords = useSelector(state => state.totalWords)

  return (
    <>
      <div className="mainContent">
        <div className="column">
          <h2>Results
            {totalWords && <span className="totalWords"> ({totalWords} words)</span>}
          </h2>
          <Filters />
          <Table />
        </div>
        <div className="column">
          <NewWordForm />
          <TestTable />
        </div>
        <SignOut />
      </div>
    </>
  );
}

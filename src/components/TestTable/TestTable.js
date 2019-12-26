import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { TestTableRow } from './TestTableRow'
import { firebasDataToArray, yDifferentNumbersFrom0ToX } from "../../utils/utils"

import './TestTable.scss'

export const TestTable = () => {
  const dispatch = useDispatch()
  const nrOfTestItems = useSelector(state => state.nrOfTestItems)
  const firebaseData = useSelector(state => state.firebaseData)

  const renderTestItems = (firebaseData, nrOfTestItems) => {
      const arrayFirebaseData = firebasDataToArray(firebaseData)
      const totalLength = arrayFirebaseData.length
      return yDifferentNumbersFrom0ToX(nrOfTestItems, totalLength).map((index) => <TestTableRow
          key={arrayFirebaseData[index].en}
          en={arrayFirebaseData[index].en}
          pl={arrayFirebaseData[index].pl}
        />
      )
  }

  return (
    <>
      <h2>Draw test table</h2>
      {firebaseData && nrOfTestItems && <table className="testTable">
        <tbody>
          {renderTestItems(firebaseData, nrOfTestItems)}
        </tbody>
      </table>}
    </>
  );
}

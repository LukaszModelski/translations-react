import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { TestTableRow } from './TestTableRow'
import { DrawForm } from "../DrawForm/DrawForm";
import { firebasDataToArray, yDifferentNumbersFrom0ToX } from "../../utils/utils"

import './TestTable.scss'

export const TestTable = () => {
  const dispatch = useDispatch()
  const nrOfTestItems = useSelector(state => state.nrOfTestItems)
  const firebaseData = useSelector(state => state.firebaseData)

  const validTable = (firebaseData && nrOfTestItems) ? true : false

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
      <DrawForm />
      {validTable && <table className="testTable">
        <tbody>
          {renderTestItems(firebaseData, nrOfTestItems.number)}
        </tbody>
      </table>}
    </>
  );
}

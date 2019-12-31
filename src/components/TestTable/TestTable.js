import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { setTestTable } from '../../store/actions'
import { TestTableRow } from './TestTableRow'
import { DrawForm } from "../DrawForm/DrawForm";
import { CheckAnswersForm } from "../CheckAnswersForm/CheckAnswersForm";
import { firebasDataToArray, yDifferentNumbersFrom0ToX } from "../../utils/utils"

import './TestTable.scss'

export const TestTable = () => {
  const dispatch = useDispatch()
  const testTable = useSelector(state => state.testTable)
  const numberOfWords = useSelector(state => state.testTable.numberOfWords)
  const iteration = useSelector(state => state.testTable.iteration)
  const firebaseData = useSelector(state => state.firebaseData)

  const validTable = (firebaseData && numberOfWords && testTable) ? true : false

  const renderTestItems = (testTable) => {
    return testTable.map((item) => <TestTableRow
        key={item.en}
        en={item.en}
        pl={item.pl}
      />
    )
  }

  const dispatchTestTable = (numberOfWords) => {
    const arrayFirebaseData = firebasDataToArray(firebaseData)
    const totalLength = arrayFirebaseData.length
    let testTable = {}
    yDifferentNumbersFrom0ToX(numberOfWords, totalLength).forEach((index) => {
      const currentWord = arrayFirebaseData[index]['en']
      testTable[currentWord] = arrayFirebaseData[index]
    })
    console.log(testTable);
    dispatch(setTestTable(testTable))
  }

  useEffect(() => {
    dispatchTestTable(numberOfWords)
  }, [numberOfWords, iteration]);
  
  return (
    <>
      <h2>Draw test table</h2>
      <DrawForm />
      {validTable && <>
        <table className="testTable">
          <tbody>
            {renderTestItems(firebasDataToArray(testTable.words))}
          </tbody>
        </table>
        <CheckAnswersForm />
      </>}
    </>
  );
}

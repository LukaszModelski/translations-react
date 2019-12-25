import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { setFirebaseData } from '../../store/actions'
import { loadFirebaseData } from '../../firebase'
import { TableRow } from './TableRow'

import './Table.scss'

export const Table = () => {
  const dispatch = useDispatch()
  const firebaseData = useSelector(state => state.firebaseData)
  const newWords = useSelector(state => state.newWords)
  const [sortedFirebaseData, setSortedFirebaseData] = useState([]);
  
  const sortFirebaseData = (firebaseData) => {
    return Object.values(firebaseData)
      .sort((a,b) => {
        if(a.percent > b.percent) return 1
        if(a.percent < b.percent) return -1
        if(a.attempts > b.attempts) return 1
        if(a.attempts < b.attempts) return -1
      })
  }

  const proxyAsyncFunction = async () => {
    const data = await loadFirebaseData()
    dispatch(setFirebaseData(data.val()))
  }

  const renderRows = (data) => {
    return data.map((item) => <TableRow 
      key={item.en}
      en={item.en}
      pl={item.pl}
      percent={item.percent}
      success={item.success}
      attempts={item.attempts}
    />)
  }

  useEffect(() => {
    proxyAsyncFunction()
  }, [newWords]);

  // useEffect(() => {
  //   console.log('test');
  // }, [newWords]);
  
  useEffect(() => {
    setSortedFirebaseData(sortFirebaseData(firebaseData))
	}, [firebaseData]);

  return (
    <>
      <h2>Results</h2>
      {sortedFirebaseData && <table className="mainTable">
        <tbody>
          {renderRows(sortedFirebaseData)}
        </tbody>
      </table>}
    </>
  );
}

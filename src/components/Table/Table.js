import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { setFirebaseData } from '../../store/actions'
import { loadFirebaseData } from '../../firebase'
import { TableRow } from './TableRow'

import './Table.scss'

export const Table = () => {
  const dispatch = useDispatch()
  const firebaseData = useSelector(state => state.firebaseData)

  const sortFirebaseData = (firebaseData) => {
    const sortedFirebaseData = Object.values(firebaseData).sort(function(a,b){
      return a.percent-b.percent;
    });
    console.log(sortedFirebaseData);
  }

  const proxyAsyncFunction = async () => {
    const data = await loadFirebaseData()
    dispatch(setFirebaseData(data.val()))
  }

  const renderRows = (firebaseData) => {
    return Object.keys(firebaseData).map((key) => <TableRow 
      key={key}
      en={firebaseData[key].en}
      pl={firebaseData[key].pl}
      percent={firebaseData[key].percent}
      success={firebaseData[key].success}
      attempts={firebaseData[key].attempts}
    />)
  }

  useEffect(() => {
    proxyAsyncFunction()
  }, []);
  
  useEffect(() => {
    sortFirebaseData(firebaseData)
	});

  return (
    <>
      <table className="mainTable">
        <tbody>
          {firebaseData ? renderRows(firebaseData): ''}
        </tbody>
      </table>
    </>
  );
}

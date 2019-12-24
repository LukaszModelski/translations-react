import React, { useEffect } from 'react'
import SignOut from './SignOut';
import { loadFirebaseData } from '../firebase'

const Table = () => {

  useEffect(() => {
    loadFirebaseData()
	}, []);

  return (
    <>
      <p>table</p>
      <SignOut />
    </>
  );
}

export default Table;
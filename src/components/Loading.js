import React from 'react'
import { LoadingIcon } from './Icons/LoadingIcon'

const Loading = () => {

  return (
    <div className="loadingScreen">
      <p>loading...</p>
      <LoadingIcon />
    </div>
  );
}

export default Loading;
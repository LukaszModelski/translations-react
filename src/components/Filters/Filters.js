import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { setTableOrder } from "../../store/actions";

import './Filters.scss'

export const Filters = () => {
  const dispatch = useDispatch()
  const order = useSelector(state => state.filters.order)
  
  return (
    <div className="filters">
      <p>
        <span 
          onClick={() => dispatch(setTableOrder('ascd'))}
          className={(order === 'ascd') ? 'active' : ''}
        >ascending</span> /
        <span
          onClick={() => dispatch(setTableOrder('desc'))}
          className={(order === 'desc') ? 'active' : ''}
        > descending</span>
      </p>
    </div>
  )
}

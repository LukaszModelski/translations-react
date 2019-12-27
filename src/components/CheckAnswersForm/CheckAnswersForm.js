import React, { useState } from 'react'
import { useDispatch } from 'react-redux'

import './CheckAnswersForm.scss'

export const CheckAnswersForm = () => {
  const dispatch = useDispatch()

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log('test');
  }

  return (
    <form         
      className="checkAnswersForm"
      onSubmit={handleSubmit}
    >
      <input type="submit" value="Check answers" />
    </form>
  )
}
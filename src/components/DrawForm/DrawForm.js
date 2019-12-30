import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { setHowManyTestWords } from "../../store/actions";

import './DrawForm.scss'

export const DrawForm = () => {
  const dispatch = useDispatch()
  const [nrOfWords, setNrOfWords] = useState(0);
  const [drawIteration, setDrawIteration] = useState(0);

  const handleSubmit = (event) => {
    event.preventDefault();
    if(nrOfWords > 0) {
      dispatch(setHowManyTestWords(nrOfWords, drawIteration+1))
      setDrawIteration(drawIteration+1)
    }
  }

  return (
    <form         
      className="drawForm"
      onSubmit={handleSubmit}
    >
      <input 
        type="number"
        placeholder="How many words?"
        onChange={event => setNrOfWords(event.target.value)}
      />
      <input type="submit" value="draw" />
    </form>
  )
}
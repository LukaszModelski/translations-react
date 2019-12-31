import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { firebasDataToArray, isAnswerCorrect } from "../../utils/utils"
import { setIsAnswerGood } from "../../store/actions"

import './CheckAnswersForm.scss'

export const CheckAnswersForm = () => {
  const dispatch = useDispatch()
  const testTable = useSelector(state => state.testTable.words)
  const iteration = useSelector(state => state.testTable.iteration)
  const [answersChecked, setAnswersChecked] = useState(false);

  const handleSubmit = (event, testTable) => {
    event.preventDefault();
    checkAnswers(testTable)
  }

  const checkAnswers = (testTable) => {
    firebasDataToArray(testTable).forEach((item)=> {
      if(item.answer) {
        const isAnswerGood = isAnswerCorrect(item.pl, item.answer)
        dispatch(setIsAnswerGood(item.en, isAnswerGood))
      }
    })
    setAnswersChecked(true)
  }

  useEffect(() => {
    setAnswersChecked(false)
  }, [iteration]);

  return (
    <form         
      className="checkAnswersForm"
      onSubmit={event => handleSubmit(event, testTable)}
    >
      <input type="submit" value="Check answers" disabled={answersChecked}/>
    </form>
  )
}
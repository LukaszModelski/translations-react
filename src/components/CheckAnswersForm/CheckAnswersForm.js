import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { firebasDataToArray, isAnswerCorrect } from "../../utils/utils"
import { setIsAnswerGood, triggerAnswersChecked } from "../../store/actions"
import { updateDB } from "../../firebase";

import './CheckAnswersForm.scss'

export const CheckAnswersForm = () => {
  const dispatch = useDispatch()
  const testTable = useSelector(state => state.testTable.words)
  const checkedAnswersIterator = useSelector(state => state.answersChecked)
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
        const attempts = item.attempts + 1
        const success = isAnswerGood ? (item.success + 1) : item.success
        const percent = Math.round(success/attempts*100*100)/100
        dispatch(setIsAnswerGood(item.en, isAnswerGood))
        updateDB(item.en, item.pl, item.en, attempts, success, percent)
      }
    })
    setAnswersChecked(true)
    dispatch(triggerAnswersChecked(checkedAnswersIterator + 1))
  }

  useEffect(() => {
    setAnswersChecked(false)
  }, [iteration]);

  return (
    <form         
      className="checkAnswersForm"
      onSubmit={event => handleSubmit(event, testTable)}
    >
      <input type="submit" value={answersChecked ? 'Draw new table' : 'Check answers'} disabled={answersChecked}/>
    </form>
  )
}
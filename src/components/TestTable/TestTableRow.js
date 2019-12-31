import React, { useState }from 'react'
import { useDispatch } from 'react-redux'
import { setTestTableAnswer } from "../../store/actions"
import { debounce } from "../../utils/utils";


export const TestTableRow = ({en, pl, isGoodAnswer='noAnswer'}) => {
  const dispatch = useDispatch()

  const handleInput = debounce((en, answer) => {
    dispatch(setTestTableAnswer(en, answer))
  }, 250)

  const answerClassName = (isGoodAnswer) => {
    switch (isGoodAnswer) {
      case true:
        return 'good'
        break;
      case false:
        return 'weak'
        break;
      default:
        return 'noAnswer'
        break;
    }
  }

  return (
    <>
      <tr className={answerClassName(isGoodAnswer)}>
        <td>{en}</td>
        <td>
          <input 
            type="text"
            placeholder="answer"
            onChange={event => handleInput(en, event.target.value)}
          />
        </td>
        <td>{pl}</td>
      </tr>
    </>
  );
}

import React, { useState }from 'react'
import { useDispatch } from 'react-redux'
import { setTestTableAnswer } from "../../store/actions"
import { debounce } from "../../utils/utils";


export const TestTableRow = ({en, pl}) => {
  const dispatch = useDispatch()

  const handleInput = debounce((en, answer) => {
    dispatch(setTestTableAnswer(en, answer))
  }, 500)

  return (
    <>
      <tr>
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

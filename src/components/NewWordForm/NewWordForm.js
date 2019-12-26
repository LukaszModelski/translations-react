import React, { useState } from 'react';
import { useDispatch } from 'react-redux'
import { triggerNewWordAdded } from '../../store/actions'
import './NewWordForm.scss';
import { updateDB } from '../../firebase'

export const NewWordForm = () => {
  const dispatch = useDispatch()
  const [en, setEn] = useState('');
  const [pl, setPl] = useState('');
  const [newWordsAdded, increaseNewWordsAdded] = useState(0);


  const handleSubmit = (event) => {
    event.preventDefault();
    addNewWord(pl, en);
  }

  const addNewWord = (inputPl, inputEn) => {
    if(inputPl && inputEn) {
      updateDB(inputEn, inputPl, inputEn, 0, 0, 0)
      dispatch(triggerNewWordAdded(newWordsAdded + 1))
      increaseNewWordsAdded(newWordsAdded + 1)
      setEn('')
      setPl('')
      alert(`New word added to database: '${inputEn}' - '${inputPl}'`)
    } else {
      alert('Both inputs must be filled')
    }
  }

  return (
    <>
      <h2>Add new word</h2>
      <form 
        className="newWordForm"
        onSubmit={handleSubmit}
      >
        <input 
          type="text"
          placeholder="english word"
          value={en}
          onChange={event => setEn(event.target.value)}
        />
        <input 
          type="text"
          placeholder="polish translation"
          value={pl}
          onChange={event => setPl(event.target.value)}
        />
        <input value="submit" type="submit"/>
      </form>
    </>
  );
}

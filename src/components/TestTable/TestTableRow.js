import React, { useState }from 'react'

export const TestTableRow = ({en, pl}) => {

  return (
    <>
      <tr>
        <td>{en}</td>
        <td>
          <input 
            type="text"
            placeholder="answer"
          />
        </td>
        <td>{pl}</td>
      </tr>
    </>
  );
}

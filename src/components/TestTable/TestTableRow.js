import React from 'react'

export const TestTableRow = ({en, pl}) => {

  return (
    <>
      <tr>
        <td>{en}</td>
        <td>
          <input type="text" />
        </td>
        <td>{pl}</td>
      </tr>
    </>
  );
}

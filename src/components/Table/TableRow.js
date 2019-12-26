import React from 'react'

export const TableRow = ({en, pl, percent, success, attempts}) => {

  const successLvl = (percent, attempts) => {
    let lvl;
    switch (true) {
      case attempts === 0:
        lvl = ' ';
        break;
      case percent>75:
        lvl = 'good';
        break;
      case percent>50:
        lvl = 'average';
        break;
      default:
        lvl = 'weak';
        break;
    }
    return lvl;
  }

  return (
    <>
      <tr className={successLvl(percent, attempts)}>
        <td>{en}</td>
        <td>{percent}</td>
        <td>{success} / {attempts}</td>
        <td>{pl}</td>
      </tr>
    </>
  );
}

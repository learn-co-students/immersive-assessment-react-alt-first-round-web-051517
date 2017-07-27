import React from 'react'

const Student = (props) => {

  return (
    <tr>
      <td>{props.name}</td>
      <td>{props.class_year}</td>
      <td>{props.percentage}</td>
      <td>
        <button className="ui button left" onClick={props.editStudent}>
          Edit
        </button>
      </td>
    </tr>

  )
}

export default Student

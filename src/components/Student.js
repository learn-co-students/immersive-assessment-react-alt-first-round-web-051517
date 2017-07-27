import React from 'react'

const Student = ({name, class_year, percentage}) => {

  return (
    <tr>
      <td>{name}</td>
      <td>{class_year}</td>
      <td>{percentage}</td>
      <td>
        <button className="ui button left">
          Edit
        </button>
      </td>
    </tr>

  )
}

export default Student

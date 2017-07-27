import React from 'react'

const Student = ({studentDetails, selectCurrentStudent}) => {

  return (
    <tr key={studentDetails.id}>
      <td>{studentDetails.name}</td>
      <td>{studentDetails.class_year}</td>
      <td>{studentDetails.percentage}</td>
      <td>
        <button className="ui button left" id={studentDetails.id} onClick={selectCurrentStudent}>
          Edit
        </button>
      </td>
    </tr>

  )
}

export default Student

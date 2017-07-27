import React from 'react'
import Student from './Student'

const StudentsList = (props) => {

  return (
    <table className="ui celled striped padded table">
      <tbody>
        <tr>
          <th>
            <h3 className="ui center aligned header">
              Student Name
            </h3>
          </th>
          <th>
            <h3 className="ui center aligned header">
              Student Grade
            </h3>
          </th>
          <th>
            <h3 className="ui center aligned header">
              Course Percentage
            </h3>
          </th>
          <th>
            <h3 className="ui center aligned header">
              Edit
            </h3>
          </th>
        </tr>

        {props.students.map((student, index) => <Student key={index} {...student} editStudent={props.editStudent}/>)}


      </tbody>
    </table>
  )
}

export default StudentsList

import React from 'react'
import courseList from '../courseList'

const CourseSelector = (props) => {





  return (
    <div className="sixteen wide column">
      <select className="ui dropdown"  onClick={props.handleChange} >
        {courseList.map( course =>  {
           return <option key={course.id}>{course.name}</option>
        })}
      </select>
    </div>
  )
}

export default CourseSelector

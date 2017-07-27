import React from 'react'
import courseList from '../courseList'

const CourseSelector = (props) => {

  const courseField = (course) => {
      return <option className="item" data-value={course} >
            {course}
            </option>
  }

  return (
    <div className="sixteen wide column">
      <select className="ui dropdown" value={props.currentCourse} onChange={props.handleCourseSelect} >
          {courseList.map((course, index) => courseField(course.name))}
      </select>
    </div>
  )

}

export default CourseSelector

import React from 'react'
import courseList from '../courseList'

const CourseSelector = (props) => {

	const fields = courseList.map(course => {
		return (
			<option className="item" key={course.id} data-value={course}>
				{course.name}
			</option>
		)
	})

  return (
    <div className="sixteen wide column">
      <select className="ui dropdown" onChange={props.handleCurrentCourse}>
         {fields}
      </select>
    </div>
  )
}



export default CourseSelector

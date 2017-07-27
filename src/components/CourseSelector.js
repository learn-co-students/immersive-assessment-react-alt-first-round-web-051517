import React from 'react'
import courseList from '../courseList'

const CourseSelector = (props) => {
  console.log(props.courses, "courses")


return (
    <select className="item" onChange={props.handleChangeCourses} >

        {props.courses.map(course =>
          <option value={course.name}>{course.name}</option>

        )}

    </select>

)

  }
//     return <option className="item" value-data="course" >
//          "test"
//       </option>
//   }
//
//   return (
//     <div className="sixteen wide column">
//       <select className="ui dropdown" onChange={props.handleChangeCourses}>
//          {courseField}
//       </select>
//     </div>
//   )
// }

export default CourseSelector

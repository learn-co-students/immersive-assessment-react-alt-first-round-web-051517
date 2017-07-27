import React, { Component } from 'react'
import CourseSelector from './CourseSelector'
import EditStudent from './EditStudent'
import StudentsList from './StudentsList'
import courseList from '../courseList'

class CourseContainer extends Component {
  constructor() {
    super()

    this.state = {
      students: [],
      currentCourse: {},
      currentStudent: {}
    }
  }

	handleCurrentCourse = (e) => {
		const currentCourse = courseList.filter( course => {
			return course.name === e.target.value
		})
  	this.setState({ currentCourse })
		this.setCourse(currentCourse)
  }

	setCourse = (course) => {
		fetch(`http://localhost:3000/courses/${course[0].id}`)
			.then(response => response.json())
			.then(courseInfo => this.setState({
				students: courseInfo.students
			})
		)
	}

	selectCurrentStudent = (event) => {
  	const currentStudentId = event.target.id;
		const currentStudent = this.state.students.filter( student => student.id === currentStudentId )
		//FINISHED HERE
		this.setState({currentStudent})
	}

  render() {
    return (
      <div className="ui grid container">
      
        <div className="ui center aligned header sixteen wide column">
					{this.state.currentCourse[0] ? this.state.currentCourse[0].name: 'Select a Course' }
        </div>

        <CourseSelector handleCurrentCourse={this.handleCurrentCourse}/>

        <EditStudent currentStudent={this.state.currentStudent}/>

        <StudentsList students={this.state.students} selectCurrentStudent={this.selectCurrentStudent} />

      </div>
    )
  }
}

export default CourseContainer

import React, { Component } from 'react'
import CourseSelector from './CourseSelector'
import EditStudent from './EditStudent'
import StudentsList from './StudentsList'
import courseList from '../courseList'
const URL = 'http://localhost:3000/courses'

class CourseContainer extends Component {
  constructor() {
    super()

    this.state = {
      students: [{
          id: 1,
          name: "Tom Foolery",
          class_year: 10,
          percentage: 88
        }, {
          id: 2,
          name: "Juno Forte",
          class_year: 11,
          percentage: 95
        }, {
          id: 3,
          name: "Eli Frizzel",
          class_year: 12,
          percentage: 86
        }, {
          id: 4,
          name: "Phil George",
          class_year: 9,
          percentage: 77
        }, {
          id: 5,
          name: "Anna Cornell",
          class_year: 11,
          percentage: 98
        }
      ],
      currentCourse: {},
      currentStudent: {},
      allCourses: []
    }
  }

  fetchAllCourses = () => {
    fetch(URL)
    .then(resp => resp.json())
    .then(data => this.setState({
      allCourses: data
    }))
  }

  componentWillMount() {
    this.fetchAllCourses()
  }

  handleChangeCourses = (event) => {
    this.setState({
      currentCourse:  event.target.value,
      students: this.state.allCourses.filter(course => course.students === event.target.value)
    })
    console.log(event.target.value, "tar")
  }

  handleChangeCurrentStudents = (event) => {
    event.preventDefault()
    console.log(event.target.value, "handleChangeCurrentStudents")
    this.setState({
      currentStudent: this.state.students.find(student =>
        student.name === event.target.value
      )
    })
  }

  handleSubmit = (event) => {
    event.preventDefault()
    // ran out of time
  }


  render() {
    console.log(this.state.allCourses)
    console.log(this.state.students, "students")
    console.log(this.state.currentStudent, "currentStudent")



    return (
      <div className="ui grid container">

        <div className="ui center aligned header sixteen wide column">
          "Course Title"
        </div>

        <CourseSelector courses={this.state.allCourses} handleChangeCourses={this.handleChangeCourses}/>

        <EditStudent handleSubmit={this.handleSubmit} currentStudent={this.state.currentStudent}/>

        <StudentsList students={this.state.students} handleChangeCurrentStudents={this.handleChangeCurrentStudents}/>

      </div>
    )
  }
}

export default CourseContainer

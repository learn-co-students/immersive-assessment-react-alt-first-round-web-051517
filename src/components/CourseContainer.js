import React, { Component } from 'react'
import CourseSelector from './CourseSelector'
import EditStudent from './EditStudent'
import StudentsList from './StudentsList'
import courseList from '../courseList'

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
      currentStudent: { id: 2,
          name: "Juno Forte",
          class_year: 11,
          percentage: 95}
    }
  }
    // enter into an array
    ______________________
    // studentsFetch = () => {
    //     fetch('http://localhost:3001/courses/5')
    //         .then(resp => resp.json())
    //         .then(data => this.setState({
    //         students: data}))
    // }

    // componentWillMount() {
    // this.studentsFetch()
    // }

  handleCourseSelect = (e) => {
    this.setState({
        currentCourse: e.target.value
    })
  }

    handleStudentSelect = (e) => {
        this.setState({
            currentStudent: e
        })
    }

  render() {

    console.log(this.state.currentCourse)

    return (
      <div className="ui grid container">
      
        <div className="ui center aligned header sixteen wide column">
          "Course Title"
        </div>

        <CourseSelector handleSelect={this.handleCourseSelect}/>

        <EditStudent handleStudentSelect={this.handleStudentSelect} currentStudent={this.state.currentStudent}/>

        <StudentsList students={this.state.students} editStudent={this.handleStudentSelect} />

      </div>
    )
  }
}

export default CourseContainer

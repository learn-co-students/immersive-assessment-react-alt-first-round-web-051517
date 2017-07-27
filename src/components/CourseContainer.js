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
      currentCourse: '',
      currentStudent: {}
    }
  }

  componentDidMount() {
    fetch('http://localhost:3001/students/')
      .then(res => res.json())
      .then(json => this.setState({students: json}))

  }


  handleCourseChange = (event) => {
    event.preventDefault()
    // this.setState({currentCourse: event.target.value})
    this.setState({currentCourse: event.target.value})
  }

  render() {

    return (
      <div className="ui grid container">

        <div className="ui center aligned header sixteen wide column">
          {this.state.currentCourse}
        </div>

        <CourseSelector handleChange={this.handleCourseChange} />

        <EditStudent student={this.state.currentStudent}/>

        <StudentsList students={this.state.students} />

      </div>
    )
  }
}

export default CourseContainer

import React, { Component } from 'react'

class EditStudent extends Component {
  constructor(props) {
    super(props)
    this.state = {
      student: {}
    }
  }

  render() {
    // if had enough time, would of made this a controlled input form


    return (
      <div className="ui center aligned sixteen wide column">
        <form className="ui form" onSubmit={this.props.handleSubmit}
        >
          <div className="inline fields">
            <div className="four wide field">
              <input
                id="name"
                type="text"
                placeholder="name"
                value={this.props.currentStudent.name}
              />
            </div>
            <div className="four wide field">
              <input
                id="class_year"
                type="number"
                placeholder="class year"
                value={this.props.currentStudent.class_year}
              />
            </div>
            <div className="four wide field">
              <input
                id="percentage"
                type="number"
                placeholder="percentage"
                value={this.props.currentStudent.percentage}
              />
            </div>
            <button className="ui button" type="submit">Submit</button>
          </div>
        </form>
      </div>
    )
  }
}

export default EditStudent

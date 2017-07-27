import React, { Component } from 'react'

class EditStudent extends Component {
  constructor(props) {
    super(props)
    this.state = {
        student: props.currentStudent
    }
  }

  handleEvent = (event) => {
    this.setState({
      student: event.target.value,
    })
  }

  render() {
  console.log(this.props.currentStudent)

    return (
      <div className="ui center aligned sixteen wide column">
        <form className="ui form"
        >
          <div className="inline fields">
            <div className="four wide field">
              <input
                id="name"
                type="text"
                placeholder="name"
                value={this.state.name}
                onChange={this.handleEvent}
              />
            </div>
            <div className="four wide field">
              <input
                id="class_year"
                type="number"
                placeholder="class year"
                value={this.state.class_year}
                onChange={this.handleEvent}
              />
            </div>
            <div className="four wide field">
              <input
                id="percentage"
                type="number"
                placeholder="percentage"
                value={this.state.percentage}
                onChange={this.handleEvent}
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

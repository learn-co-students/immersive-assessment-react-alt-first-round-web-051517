import React, { Component } from 'react'

class EditStudent extends Component {
  constructor(props) {
    super(props)

    this.state = {
      student: {
      	name: '',
				grade: '',
				percentage: ''
			}
    }
  }

  render() {

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
              />
            </div>
            <div className="four wide field">
              <input
                id="class_year"
                type="number"
                placeholder="class year"
              />
            </div>
            <div className="four wide field">
              <input
                id="percentage"
                type="number"
                placeholder="percentage"
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

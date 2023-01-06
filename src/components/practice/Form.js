import React, { Component } from 'react'

class form extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         username : "",
         comment : ""
      }
    }
    handleUsernameChange= (event)=> {
        this.setState({
            username : event.target.value
        }, ()=>console.log(this.state.username))
    }
    handleCommentChange= event => {
        this.setState({
            comment : event.target.value
        })
    }
    handleSubmit= event => {
        alert(`${this.state.username} says ${this.state.comment}`)
        event.preventDefault()
    }

  render() {
    return (
      <form>
        <label>Username</label>
        <input value={this.state.username} onChange= {this.handleUsernameChange} ></input>

        <div>
            <label>Comment</label>
            <textarea value={this.state.comment} onChange= {this.handleCommentChange}></textarea>
        </div>

        <div>
            <button type="submit" onClick={this.handleSubmit}>Submit</button>
        </div>
      </form>
    )
  }
}

export default form
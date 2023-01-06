import React, { Component } from 'react'

class Events extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         message : "Hello"
      }
    //   this.changeMessage= this.changeMessage.bind(this)
    }
    // changeMessage(){
    //     this.setState({
    //         message : "Goodbye",
    //     })
    //     console.log("clicked")
    // }

    changeMessage=()=>{
       this.setState({
        message : "Goodbye"
       })
    }

  render() {
    return (
      <div>
        <h1>{this.state.message}</h1>

        {/* Binding in render */}
        {/* <button onClick={this.changeMessage.bind(this)}>Click</button> */}

        {/* <button onClick={()=>this.changeMessage()}>click</button> */}
        <button onClick={this.changeMessage}>Click</button>
      </div>
    )
  }
}

export default Events
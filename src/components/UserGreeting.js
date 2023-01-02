import React, { Component } from 'react'

class UserGreeting extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         isLoggedIn : true
      }
    }
  render() {
    
    return this.state.isLoggedIn && <div>Hello Yogesh</div>
    //return this.state.isLoggedIn ? <div>Hello Yogesh</div> : <div>Hello Guest</div>
    
    // let message
    // if(this.state.isLoggedIn){
    //     return this.message= <div>Hello Vishwas</div>
    // }else{
    //     return this.message= <div>Hello Guest</div>
    // }
    
    
    // if (this.state.isLoggedIn){
    //     return   <div>Hello Vishwas</div>

    // }
    // else{
    //     return (
    //         <div>Hello Guest</div>
    //       )
    // }
    
  }
}

export default UserGreeting
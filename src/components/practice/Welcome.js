import React, { Component } from 'react'

class Welcome extends Component{
    constructor(){
        super()
        this.state = {
            message : "Hello Usha"
        }
    }
    changeMessage(){
        console.log("clicked")
        this.setState({
            message : "Thankyou"
        })
    }
    render(){
        // return <h1>Hi {this.props.name} {this.props.caste}</h1>
        //Using props in class

        return(
            <div>
                <h1>{this.state.message}</h1>
                <button onClick = {()=> this.changeMessage()} >Subscribe</button>
            </div>
        )
    }
}

export default Welcome;
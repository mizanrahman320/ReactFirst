import React, { Component } from 'react'

export default class EventEx extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         fieldChange:''
      }
    }

    changeInputValue=(e)=>
  {
    this.setState(
    {
        fieldChange:e.target.value
    },()=>{
        console.log(this.state.fieldChange)
    })
    
  }
  render() {
    return (
        <div>
            <input type='text' onChange={this.changeInputValue}/>
            <p>{this.state.fieldChange}</p>
        </div>
    )
  }
}

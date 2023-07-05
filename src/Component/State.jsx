import React, { Component } from 'react'

export default class State extends Component {

    constructor(props) {
      super(props)
    
      this.state = {
         count:3
      }
    }
    
  incrementCount=()=>
  {
    this.setState(
    {
        count:this.state.count+1
    })
    
  }

  decrementCount=()=>
  {
    this.setState(
    {
        count:this.state.count-1
    })
    
  }

  render() {
    const {count}=this.state
    return (
      <div>
        <h1>Count {count}</h1>
        <button onClick={this.incrementCount} disabled={count===5?true:false}>+</button>
        <button onClick={this.decrementCount} disabled={count===0?true:false}>-</button>
      </div>
    )
  }
}

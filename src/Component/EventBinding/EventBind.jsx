import React, { Component } from 'react'

export default class EventBind extends Component {

    constructor(props) {
      super(props)
    
      this.state = {
         count:0
      }
      this.incrementCount=this.incrementCount.bind(this)
    }

    incrementCount()
    {
        this.setState(
        {
            count:this.state.count+1
        })
    
    }

  render() {
    const {count}=this.state
    return (
      <div>
        <h1>Count {count}</h1>
        <button onClick={this.incrementCount} disabled={count===5?true:false}>+</button>
      </div>
    )
  }
}

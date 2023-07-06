import React, { Component } from 'react'

import HomePage from './HomePage'
import LoginPage from './LoginPage'

export default class index extends Component {

    constructor(props) {
      super(props)
    
      this.state = {
         isLooged:false
      }
    }
    
  render() {
    const {isLooged}=this.state
    let element
    if(isLooged)
    {
         element=<HomePage/>
    }
    else
    {
        element=<LoginPage/>
    }

    return (
        <div>{element}</div>
        )
    /* return (
      <div>
        <h1>{this.state.isLooged===true?<HomePage/>:<LoginPage/>}</h1>
      </div>
    ) */
  }
}

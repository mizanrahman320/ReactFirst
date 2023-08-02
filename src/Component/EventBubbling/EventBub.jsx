import React from 'react'

export default function EventBub() {

  const childClick=(event)=>
  {
    event.stopPropagation();
    console.log("Clicked ",event);
  }

  const parentClick=(event)=>
  {
    console.log("parent Clicked ",event);
  }
  return (
    <div className='parent' onClick={parentClick}>
      <h1>Hello</h1>
      <button onClick={childClick}>+</button>
    </div>
  )
}

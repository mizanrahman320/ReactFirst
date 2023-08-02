import React, { useState } from 'react'

export default function index() {

    const [count,setCount]=useState(0);

    const incrementCount =()=>{
        setCount(count+1);
    }

    //update state

    const updteState =()=>
    {
        setCount((count)=>count+1);
        setCount((count)=>count+1);
        setCount((count)=>count+1);
    }


  return (
    <div>
        <h1>Count {count}</h1>
        <button onClick={incrementCount}> + </button>
        <hr></hr>
        <p>Upadte State</p>
        <button onClick={updteState}> + </button>
    </div>
  )
}

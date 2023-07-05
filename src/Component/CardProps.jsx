import React from 'react'

export default function CardProps(props) {
  return (
    <div>
        <p>{props.name}</p>
        <p>{props.description}</p>
    </div>
  )
}

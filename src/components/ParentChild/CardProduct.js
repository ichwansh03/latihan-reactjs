import React from 'react'

export default function CardProduct(props) {
  return (
    <div>
        <p>id : {props.id}</p>
        <p>name : {props.name}</p>
        <p>price : {props.price}</p>
        <p>likes : {props.likes}</p>
        <button>Likes</button>
        <button>Dislike</button>
    </div>
  )
}

import React from 'react'

export default function CardProduct(props) {
  return (
    <div>
        <p>id : {props.id}</p>
        <p>name : {props.name}</p>
        <p>price : {props.price}</p>
        <p>likes : {props.likes}</p>
        <button onClick={()=> props.onLikes(props.id)}>Likes</button>
        <button onClick={()=> props.onDislikes()}>Dislike</button>
    </div>
  )
}

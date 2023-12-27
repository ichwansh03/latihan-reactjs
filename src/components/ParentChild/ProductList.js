import React, { useState } from 'react'
import CardProduct from './CardProduct';

export default function ProductList() {

    const listOfProduct = [
        {id : 1, name : "Acer", price : 1500, likes : 5},
        {id : 2, name : "Dell", price : 2500, likes : 15},
        {id : 3, name : "Lenovo", price : 3500, likes : 25},
    ]

    const [products, setProduct] = useState(listOfProduct);

  return (
    <div>
        {
            products.map(prod => {
                return (
                    <li>
                        <CardProduct 
                            id = {prod.id}
                            name = {prod.name}
                            price = {prod.price}
                            likes = {prod.likes}
                        />
                        {/* <p>id : {prod.id}</p>
                        <p>name : {prod.name}</p>
                        <p>price : {prod.price}</p>
                        <p>likes : {prod.likes}</p> */}
                    </li>
                )
            })
        }
    </div>
  )
}

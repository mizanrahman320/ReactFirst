import React from 'react'
import Product from './Product'; 


const users=
[
    {
        "id":1,
        "FirstName":"Mizan",
        "Age":30
    },
    {
        "id":2,
        "FirstName":"Eshan",
        "Age":20
    }
]
export default function CardList() {
  const productList={users}
  return (
    <div>
    {
      users.map((productList)=>(
        <Product key={productList.id} product={productList}/>
      ))
    }
    </div>
    
    
  )
}

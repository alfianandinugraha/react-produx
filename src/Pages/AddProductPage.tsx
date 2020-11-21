import React from 'react'
import { ProductForm } from '../Components/ProductForm'
import { Product } from '../Store/product/productTypes'

export const AddProductPage = () => {
  const receivePayload = (payload: Product) => {
    console.log(payload)
  }

  return (
    <div>
      <h1>Add Product</h1>
      <ProductForm payloadHandler={receivePayload}/>
    </div>
  )
}

import Axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { Product } from '../Store/product/productTypes'

export const UpdateProductPage = () => {
  const params = useParams<{ id: string }>()
  const id = +params.id

  const [product, setProduct] = useState<Product>()

  useEffect(() => {
    Axios.get(`http://localhost:5500/products/${id}`)
      .then(({ data }) => setProduct(data))
      .catch(err => console.log({ err }))
  }, [])

  useEffect(() => {
    console.log({product})
  }, [product])

  return (
    <div>
      <h1>Update Product #{id}</h1>
    </div>
  )
}

import Axios from 'axios'
import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux'
import { useParams } from 'react-router-dom'
import { ProductForm } from '../Components/ProductForm'
import { updateProductRequest } from '../Store/product/productActions.update'
import { Product, UpdateProductProps } from '../Store/product/productTypes'

const UpdateProductPage = (props: UpdateProductProps) => {
  const params = useParams<{ id: string }>()
  const id = +params.id

  const [product, setProduct] = useState<Product>()

  useEffect(() => {
    Axios.get(`http://localhost:5500/products/${id}`)
      .then(({ data }) => setProduct(data))
      .catch(err => console.log({ err }))
  }, [])

  const payloadProductFormHandler = (payload: Product) => {
    props.updateProductRequest(payload)
  }

  return (
    <div>
      {
        !product ? (<h1>Product Not Found</h1>) : (
          <>
            <h1>Update Product #{id}</h1>
            <ProductForm
              payloadHandler={payloadProductFormHandler}
              product={product}
              buttonMessage="Update Product"
            />
          </>
        )
      }
    </div>
  )
}

const mapDispatchToProps = (dispatch: any) => {
  return {
    updateProductRequest: (product: Product) => dispatch(updateProductRequest(product))
  }
}

export default connect(null, mapDispatchToProps)(UpdateProductPage)
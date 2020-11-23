import React from 'react'
import { connect } from 'react-redux'
import { ProductForm } from '../Components/ProductForm'
import { sendProductRequest } from '../Store/product/productActions.send'
import { Product, SendProductProps } from '../Store/product/productTypes'

const AddProductPage = (props: SendProductProps) => {
  const receivePayload = (payload: Product) => {
    props.sendProductRequest(payload)
  }

  return (
    <div>
      <h1>Add Product</h1>
      <ProductForm payloadHandler={receivePayload}/>
    </div>
  )
}

const mapDispatchToProps = (dispatch: any) => {
  return {
    sendProductRequest: (product: Product) => dispatch(sendProductRequest(product))
  }
}

export default connect(null, mapDispatchToProps)(AddProductPage)
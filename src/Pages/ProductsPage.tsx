import { connect } from 'react-redux'
import React, { useEffect } from 'react'
import { ProductProps, ProductStore } from '../Store/product/productTypes'
import { fetchProductRequest } from '../Store/product/productActions.fetch'

const ProductsPage = (props: ProductProps) => {
  useEffect(() => {
    props.fetchProductRequest && props.fetchProductRequest()
  }, [])

  useEffect(() => {
    console.log(props.product)
  }, [props.product])

  return (
    <div>
      <h1>Products</h1>
    </div>
  )
}

const mapStateToProps = (state: ProductStore) => {
  return {
    product: state
  }
}

const mapDispatchToProps = (dispatch: any) => {
  return {
    fetchProductRequest: () => dispatch(fetchProductRequest())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ProductsPage)
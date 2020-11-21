/* eslint-disable react-hooks/exhaustive-deps */
import { connect } from 'react-redux'
import React, { useEffect } from 'react'
import { ProductProps, ProductStore } from '../Store/product/productTypes'
import { fetchProductRequest } from '../Store/product/productActions.fetch'
import { ProductsTable } from '../Components/ProductsTable'

const ProductsPage = (props: ProductProps) => {
  useEffect(() => {
    props.fetchProductRequest()
  }, [])

  const ToggleComponentProduct = () => {
    if (props.product.error) return (<p>Error : {props.product.error}</p>)

    return props.product.data !== undefined && props.product.data.length !== 0 ?
      (<ProductsTable products={props.product.data} />) :
      (<p>Product not Found</p>)
  }

  return (
    <div>
      <h1>Products</h1>
      <div>
        <ToggleComponentProduct />
      </div>
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
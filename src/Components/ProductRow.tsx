import { TableRow, TableCell, Button } from '@material-ui/core'
import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { deleteProductRequest } from '../Store/product/productActions.delete'
import { DeleteProductProps, Product } from '../Store/product/productTypes'

interface Props extends DeleteProductProps {
  product: Product
}

const ProductRow = (props: Props) => {
  const { id, name, description, price } = props.product
  
  const deleteProductHandler = () => {
    props.deleteProductRequest(props.product)
  }

  return (
    <TableRow key={id}>
      <TableCell>{id}</TableCell>
      <TableCell>{name}</TableCell>
      <TableCell>{description}</TableCell>
      <TableCell>{price}</TableCell>
      <TableCell>
        <div style={{ display: "flex" }}>
          <Link to={`/products/${id}/update`} style={{ textDecoration: "none" }}>
            <Button variant="contained" color="primary">Update</Button>
          </Link>
          <Button 
            variant="contained" 
            color="secondary"
            onClick={deleteProductHandler}
          >Delete</Button>
        </div>
      </TableCell>
    </TableRow>
  )
}

const mapDispatchToProps = (dispatch: any) => {
  return {
    deleteProductRequest: (product: Product) => dispatch(deleteProductRequest(product))
  }
}

export default connect(null, mapDispatchToProps)(ProductRow)

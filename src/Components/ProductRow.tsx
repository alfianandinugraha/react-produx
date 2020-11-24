import { TableRow, TableCell, Button } from '@material-ui/core'
import React from 'react'
import { Link } from 'react-router-dom'
import { Product } from '../Store/product/productTypes'

interface Props {
  product: Product
}

export const ProductRow = (props: Props) => {
  const {id, name, description, price} = props.product
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
          <Button variant="contained" color="secondary">Delete</Button>
        </div>
      </TableCell>
    </TableRow>
  )
}

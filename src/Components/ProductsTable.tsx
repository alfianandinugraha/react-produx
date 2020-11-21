import { Table, TableHead, TableRow, TableCell, TableBody, Button } from '@material-ui/core'
import React from 'react'
import { Product } from '../Store/product/productTypes'
import { Link } from 'react-router-dom'

interface Props {
  products: Product[]
}

export const ProductsTable = (props: Props) => {
  return (
    <>
      <Table aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Id</TableCell>
            <TableCell>Name</TableCell>
            <TableCell>Description</TableCell>
            <TableCell>Price</TableCell>
            <TableCell>Actions</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {
            props.products.map((product: Product) => {
              const { id, name, description, price } = product
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
            })
          }
        </TableBody>
      </Table>
    </>
  )
}

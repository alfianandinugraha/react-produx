import { Table, TableHead, TableRow, TableCell, TableBody} from '@material-ui/core'
import React from 'react'
import { Product } from '../Store/product/productTypes'
import ProductRow from './ProductRow'

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
            props.products.map((product: Product) => <ProductRow product={product} key={product.id}/>)
          }
        </TableBody>
      </Table>
    </>
  )
}

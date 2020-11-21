import { Button, makeStyles, TextField } from '@material-ui/core'
import React  from 'react'
import useForm from '../Hooks/useForm'
import { Product } from '../Store/product/productTypes'

interface Props {
  payloadHandler: (product: Product) => void
}

const useStyle = makeStyles(theme => (
  {
    root: {
      width: '100%',
      "& > *": {
        width: "100%",
        marginBottom: theme.spacing(5)
      }
    }
  }
))

export const ProductForm = (props: Props) => {
  const classes = useStyle()
  const [name, setName, setNameForm] = useForm("")
  const [description, setDescription, setDescriptionForm] = useForm("")
  const [price, setPrice, setPriceForm] = useForm("")

  const clickAddProductHandler = () => {
    const timeStampNow = new Date().getTime()

    const product: Product = {
      id: Math.random(),
      name, description, 
      price: +price,
      updatedAt: timeStampNow,
      createdAt: timeStampNow
    }

    props.payloadHandler(product)

    setName("")
    setDescription("")
    setPrice("")
  }

  return (
    <>
      <div className={classes.root}>
        <TextField
          color="primary"
          label="Product Name"
          onChange={setNameForm}
          type="input"
          value={name}
        ></TextField>
        <TextField 
          color="primary" 
          label="Product Description" 
          onChange={setDescriptionForm}
          value={description}
        ></TextField>
        <TextField 
          color="primary" 
          label="Product Price" 
          type="number" 
          onChange={setPriceForm}
          value={price}
        ></TextField>
        <Button variant="contained" color="primary" onClick={clickAddProductHandler}>+ Product</Button>
      </div>
    </>
  )
}

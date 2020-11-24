import { Button, makeStyles, TextField } from '@material-ui/core'
import React  from 'react'
import useForm from '../Hooks/useForm'
import { Product } from '../Store/product/productTypes'

interface Props {
  product?: Product
  buttonMessage?: string
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
  const { product } = props
  const [name, setName, setNameForm] = useForm(product?.name)
  const [description, setDescription, setDescriptionForm] = useForm(product?.description)
  const [price, setPrice, setPriceForm] = useForm(product?.price.toString())

  const clickAddProductHandler = () => {
    const timeStampNow = new Date().getTime()

    const productPayload: Product = {
      id: product?.id || Math.random(),
      name, description, 
      price: +price,
      updatedAt: timeStampNow,
      createdAt: product?.createdAt || timeStampNow
    }

    props.payloadHandler(productPayload)

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
        <Button variant="contained" color="primary" onClick={clickAddProductHandler}>
          {props.buttonMessage || "+ Product"}
        </Button>
      </div>
    </>
  )
}

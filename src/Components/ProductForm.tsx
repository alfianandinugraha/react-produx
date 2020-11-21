import { Button, makeStyles, TextField } from '@material-ui/core'
import React  from 'react'
import useForm from '../Hooks/useForm'

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

export const ProductForm = () => {
  const classes = useStyle()
  const [name, setName, setNameForm] = useForm("")
  const [description, setDescription, setDescriptionForm] = useForm("")
  const [price, setPrice, setPriceForm] = useForm("")

  const clickAddProductHandler = () => {
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

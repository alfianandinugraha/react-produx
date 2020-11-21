import { Button, makeStyles, TextField } from '@material-ui/core'
import React from 'react'

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

  return (
    <>
      <div className={classes.root}>
        <TextField color="primary" label="Product Name"></TextField>
        <TextField color="primary" label="Product Description"></TextField>
        <TextField color="primary" label="Product Price" type="number"></TextField>
        <Button variant="contained" color="primary">+ Product</Button>
      </div>
    </>
  )
}

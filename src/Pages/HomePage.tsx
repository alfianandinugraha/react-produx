import { Button, makeStyles } from '@material-ui/core'
import React from 'react'
import { Link } from 'react-router-dom'

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      marginRight: theme.spacing(2),
      textDecoration: 'none'
    },
  }
}))

export const HomePage = () => {
  const classes = useStyles()

  return (
    <div>
      <h1>Dashboard Produx</h1>
      <div className={classes.root}>
        <Link to="/add-product">
          <Button variant="contained" color="primary">Add Product</Button>
        </Link>
        <Link to="/products">
          <Button variant="contained" color="primary">List Product</Button>
        </Link>
      </div>
    </div>
  )
}

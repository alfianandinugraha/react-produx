import { Button, makeStyles } from '@material-ui/core'
import React from 'react'

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      marginRight: theme.spacing(2)
    }
  }
}))

export const HomePage = () => {
  const classes = useStyles()

  return (
    <div>
      <h1>Dashboard Produx</h1>
      <div className={classes.root}>
        <Button variant="contained" color="primary">Add Product</Button>
        <Button variant="contained" color="primary">List Product</Button>
      </div>
    </div>
  )
}

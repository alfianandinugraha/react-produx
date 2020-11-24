import { Button, ButtonGroup, makeStyles } from '@material-ui/core'
import React from 'react'
import { Link } from 'react-router-dom'

const useClasses = makeStyles(theme => ({
  root: {
    marginTop: '1rem',
    "& a": {
      color: theme.palette.primary.main,
      textDecoration: 'none'
    }
  }
}))

export const NavigationTop = () => {
  const classes = useClasses()

  return (
    <>
      <ButtonGroup color="primary" className={classes.root} aria-label="outlined primary button group">
        <Button>
          <Link to="/">Home</Link>
        </Button>
        <Button>
          <Link to="/add-product">Add Product</Link>
        </Button>
        <Button>
          <Link to="/products">List Product</Link>
        </Button>
      </ButtonGroup>
    </>
  )
}

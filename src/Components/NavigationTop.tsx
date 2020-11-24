import { Button, ButtonGroup, makeStyles } from '@material-ui/core'
import React from 'react'
import { Link, useLocation } from 'react-router-dom'

const useClasses = makeStyles(theme => ({
  root: {
    marginTop: '1rem',
    "& a": {
      color: theme.palette.primary.main,
      textDecoration: 'none'
    }
  },
  navActive: {
    "& a": {
      color: 'white'
    }
  }
}))

export const NavigationTop = () => {
  const classes = useClasses()
  const {pathname} = useLocation()

  const listRoutes = [{
    pathname: "/",
    text: "Home"
  }, {
    pathname: "/add-product",
    text: "Add Product"
  }, {
    pathname: "/products",
    text: "List Product"
  }]

  return (
    <>
      <ButtonGroup color="primary" className={classes.root} aria-label="outlined primary button group">
        {
          listRoutes.map(route => {
            const isActive = route.pathname === pathname;

            return (
              <Button
                variant={isActive ? "contained" : "outlined"}
                className={isActive ? classes.navActive : ""}
                key={route.text}
              >
                <Link to={route.pathname}>{route.text}</Link>
              </Button>
            )
          })
        }
      </ButtonGroup>
    </>
  )
}

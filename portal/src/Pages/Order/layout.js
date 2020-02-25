import React from 'react'
import Header from 'Components/Header'
import useStyles from './style';
const Layout = () => {
    const classes = useStyles();
    return (
        <div className={classes.root}>
            <Header />
            Hello from Order Page
        </div>
    )
}
export default Layout
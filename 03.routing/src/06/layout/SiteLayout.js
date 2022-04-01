import React, { Fragment } from 'react'
import Header from './Header';
import Navigation from './Navigation';
import Footer from './Footer'
import styles from '../assets/scss/component/main.scss'
const SiteLayout = ({children}) => {
  return (
      <Fragment>
        <Header />
        <div className={StyleSheet.Content}>
            {children}
        </div>
        <Navigation />
        <Footer />
        </Fragment>
    )
}

export default SiteLayout
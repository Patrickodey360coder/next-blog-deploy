import React from 'react'
import Footer from './Footer'
import Config from './Config'
import Navigation from './Navigation'

function Layout({children, story}) {
  return (
    <>
      {/* <Config blok={story.content}/>
       */}
      <Navigation/>
      {children}
      <Footer/>
    </>
  )
}

export default Layout
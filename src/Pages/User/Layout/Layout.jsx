import React , { useRef }from 'react'
import Navbar from '../../../Components/User/Home/Navbar'
import Footer from '../../../Components/User/Home/Footer.jsx'

function Layout({children}) {
  return (
    <main className='overflow-hidden bg-white '>
        <Navbar />
        <div>{children}</div>
        <Footer />
       </main>
  )
}

export default Layout

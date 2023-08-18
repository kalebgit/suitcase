// import {useState} from 'react'
//components
import NavBar from '../../page/NavBar/NavBar'
import Footer from '../../page/Footer/Footer'
import {Outlet} from 'react-router-dom'
import {useState} from 'react'
function Root(){
    
    return (
        <>
            <NavBar/>
            <Outlet/>
            <Footer/>
        </>
    )
}

export default Root;
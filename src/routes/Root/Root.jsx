// import {useState} from 'react'
//components
import NavBar from '../../page/NavBar/NavBar'
import Footer from '../../page/Footer/Footer'
import {Outlet} from 'react-router-dom'
import {useState} from 'react'
function Root(){
    const [cart, setCart] = useState(new Array());
    return (
        <>
            <NavBar cart={{cart, setCart}}/>
            <Outlet cart={{cart, setCart}}/>
            <Footer/>
        </>
    )
}

export default Root;
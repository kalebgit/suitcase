//images
import Menu from '../../assets/img/gen/menu.png'
import Account from '../../assets/img/gen/profile.png'
import Cart from '../../assets/img/gen/cart.png'

//components
import LinkPage from '../../components/LinkPage/LinkPage'
import LinkImage from '../../components/LinkImage/LinkImage'

//hooks
import {useState} from 'react'

//styles
import './NavBar.scss';

function NavBar({}){
    const [navClass, setNavClass] = useState("")
    const [isExpanded, setIsExpanded] = useState(false);

    const menus = [
        {
            imageResource: Menu,
            altMessage: "menuDroppable",
            otherClassName: "md:hidden mr-auto",
            handlerClick: ()=>{
                if(isExpanded == true){
                    setNavClass("h-0")
                    setIsExpanded(false);
                }else{
                    setNavClass("h-full")
                    setIsExpanded(true);
                }
                
            }
        },
        {
            imageResource: Account,
            altMessage: "AccountView",
            otherClassName: "",
        },
        {
            imageResource: Cart,
            altMessage: "Carrito de Compras",
            otherClassName: ""
        }
    ]

    
    const pages = ["Viajes", "Clima"]


    //styles
    const headerStyle={
        backgroundColor: "rgba(255, 255, 255, 0.1)",
        backdropFilter: "blur(1rem)"
    }

    const navStyle={
        transition: ".7s"
    }
    
    const linkStyle={
        opacity: isExpanded ? "1" : "0",
        transition: ".3s"
    }



    
    
    return(
        <header className=" h-screen flex flex-col md:flex-row flex-nowrap justify-start 
            md:justify-between md:items-center " 
            style={headerStyle}>
            <div className="h-16 p-3 border-b-2 flex flex-row flex-nowrap justify-end items-center 
            gap-5">
                {menus.map((element, index)=><LinkImage key={index} {...element}/>)}
            </div>
            <nav className={"h-0 overflow-hidden " + navClass} style={navStyle}>
                <ul className="h-full flex md:flex-row flex-col flex-nowrap justify-start 
                items-center ">
                    {pages.map((element, index)=><li key={index} 
                    className="h-1/6 flex justify-center items-center w-full hover:bg-gray-200
                    NavBarLink"><LinkPage style={linkStyle} title={element} to/></li>)}
                </ul>
            </nav>
        </header>
    )
}

export default NavBar;
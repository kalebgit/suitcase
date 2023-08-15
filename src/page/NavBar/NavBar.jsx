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
    const [headerClass, setHeaderClass] = useState("")


    const resetHeader = ()=>{
        setNavClass("h-0")
        setHeaderClass("h-16")
        setIsExpanded(false);
    }

    const expandHeader = ()=>{
        setHeaderClass("h-screen")
        setNavClass("h-full")
        setIsExpanded(true);
    }

    const menus = [
        {
            imageResource: Menu,
            altMessage: "menuDroppable",
            otherClassName: "md:hidden mr-auto",
            handlerClick: (e)=>{
                console.log(e);
                e.preventDefault();
                if(isExpanded == true){
                    resetHeader()
                }else{
                    expandHeader()
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

    
    const pages = [
        {
            title: "Store",
            path: "/Store",
        },                                      
        {
            title: "Promociones",
            path: ""
        }   
    ]

    

    const handlerClickLinkPage = (e)=>{
        resetHeader()
    }

    //styles

    const navStyle={
        transition: ".7s"
    }
    
    const linkStyle={
        opacity: isExpanded ? "1" : "0",
        transition: ".3s"
    }



    
    
    return(
        <header className={"sticky top-0 z-50 bg-white " + headerClass}>
            <section className="h-full flex flex-col md:flex-row flex-nowrap justify-start 
            md:justify-between md:items-center">
                <div className="h-16 p-3 border-b-2 flex flex-row flex-nowrap justify-end items-center 
                gap-5">
                    {menus.map((element, index)=><LinkImage key={index} {...element}/>)}
                </div>
                <nav className={"h-0 overflow-hidden " + navClass} style={navStyle}>
                    <ul className="h-full flex md:flex-row flex-col flex-nowrap justify-start 
                    items-center ">
                        {pages.map((element, index)=><LinkPage  key={index} style={linkStyle} 
                            path={element.path}
                            otherClassName="h-1/6 flex justify-center items-center w-full hover:bg-gray-200
                            NavBarLink"
                            handlerClick={handlerClickLinkPage}> 
                            <li className="">{element.title}</li>
                        </LinkPage>)}
                    </ul>
                </nav>
            </section>
            
        </header>
    )
}

export default NavBar;
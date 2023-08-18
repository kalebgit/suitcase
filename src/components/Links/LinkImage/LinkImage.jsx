import {Link} from 'react-router-dom'

function LinkImage({imageResource, altMessage, otherClassName, handlerClick, style, isCart, cart, path}){
    return (
        <Link className={"h-full " + otherClassName} style={style} to={path}>
            <img className={"h-full "} 
                    src={imageResource} alt={altMessage} onClick={handlerClick}/>
            {isCart ? cart.length > 0 ? <p className="bg-red-500 text-white flex flex-row justify-center items-center
            rounded-full text-sm absolute py-1 px-3 top-1 right-1">1</p> : <></> : <></>}
            
        </Link>
        
    )
}

export default LinkImage;
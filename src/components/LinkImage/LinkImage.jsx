import {Link} from 'react-router-dom'

function LinkImage({imageResource, altMessage, otherClassName, handlerClick, style}){
    return (
        <Link className={"h-full " + otherClassName} style={style}>
            <img className={"h-full "} 
                    src={imageResource} alt={altMessage} onClick={handlerClick}/>
        </Link>
        
    )
}

export default LinkImage;
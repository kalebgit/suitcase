

function LinkImage({imageResource, altMessage, otherClassName, handlerClick}){
    return (
        <img className={"h-full " + otherClassName} 
                src={imageResource} alt={altMessage} onClick={handlerClick}/>
    )
}

export default LinkImage;
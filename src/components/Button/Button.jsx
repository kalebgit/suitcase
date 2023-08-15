

function Button({type, content, otherClassName, clickHandler}){
    return(
        <button type={type} className={"w-max py-2 px-4 rounded-full font-bold " + otherClassName}
        onClick={clickHandler}>
            {content}</button>
    )
}

export default Button;
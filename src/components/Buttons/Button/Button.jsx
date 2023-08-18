

function Button({type, content, otherClassName, clickHandler, onSubmit}){
    return(
        <button type={type} className={"w-max py-2 px-4 rounded-full font-bold " + otherClassName}
        onClick={clickHandler} onSubmit={onSubmit}>
            {content}</button>
    )
}

export default Button;
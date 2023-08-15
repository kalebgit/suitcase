

function Button(type, content, otherClassName){
    return(
        <button type={type} className={"w-max py-2 px-4 rounded-full font-bold " + otherClassName }>
            {content}</button>
    )
}

export default Button;
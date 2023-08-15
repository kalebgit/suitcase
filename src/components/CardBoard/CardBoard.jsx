import ButtonLink from '../ButtonLink/ButtonLink'

function CardBoard({title, titleSize,  content, contentStyle, hasImage, image, className, 
    hasButton, button}){
    return (
        <section className={className + " "}>
            <h1 className={"text-center font-bold text-white border-b-2 pb-5 " + titleSize}>{title}</h1>
            <p className={"text-white " + contentStyle}>{content}</p>
            {/* {hasButton && <ButtonLink {...button}/>} */}
            {hasImage && <img {...image}/>}
            
        </section>
    )
}

export default CardBoard;
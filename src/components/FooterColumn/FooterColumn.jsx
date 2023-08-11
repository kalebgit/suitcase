import LinkImage from '../../components/LinkImage/LinkImage'


function FooterColumn({title, text, images}){

    const renderImages = ()=>{
        return (
            <div className="h-8 flex flex-row flex-wrap justify-center items-center gap-4">
                {images.map((element, index)=><LinkImage key={index} {...element}/>)}
            </div>
        )
    }

    return (
        <article className="px-8 py-5 border-b-4 flex flex-col flex-nowrap justify-start items-center gap-3">
            <h3 className=" text-md font-bold">{title}</h3>
            {text && <p className="text-sm text-center">{text}</p>}
            {images && renderImages()}
        </article>
    )
}

export default FooterColumn;
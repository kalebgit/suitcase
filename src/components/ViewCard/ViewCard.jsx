import './ViewCard.scss'

//components
import {Link} from 'react-router-dom'

function ViewCard({title, announce, background}){
    return (
        <Link className="h-full w-full"to>
            <article className="viewcard h-full w-full rounded-md bg-cover bg-center flex flex-col flex-nowrap 
            justify-center items-center gap-5" style={{backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.6), 
            rgba(0, 0, 0, 0.6)), url(${background}`}}>
            <h2 className="text-4xl text-white font-bold tracking-wider text-center">{title}</h2>
            <p className="text-lg text-white">{announce}</p>
            </article>
        </Link>
        
    )
}

export default ViewCard;
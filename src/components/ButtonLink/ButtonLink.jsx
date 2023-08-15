//components
import {Link} from 'react-router-dom'

function ButtonLink({content, size}){
    return (
        <Link>
            <button className={" bg-white w-max py-2 px-4 rounded-full font-bold " + size}>
                {content}
            </button>
        </Link>
    )
}

export default ButtonLink;
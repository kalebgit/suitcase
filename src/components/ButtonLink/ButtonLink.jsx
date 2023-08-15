//components
import {Link} from 'react-router-dom';
import Button from '../Button/Button'

function ButtonLink({type, content, otherClassName, path}){
    return (
        <Link >
            <Button content={content} otherClassName={otherClassName} type={type}/>
        </Link>
    )
}

export default ButtonLink;
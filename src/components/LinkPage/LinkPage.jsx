import {Link} from 'react-router-dom'


function LinkPage({otherClassName, style, path, children, handlerClick}){
    return (
        <Link className={"" + otherClassName} style={style} to={path} 
        onClick={handlerClick} >{children}</Link>
    )
}

export default LinkPage;
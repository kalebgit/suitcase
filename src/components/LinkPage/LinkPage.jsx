import {Link} from 'react-router-dom'


function LinkPage({title, otherClassName, style}){
    return (
        <Link className={"" + otherClassName} style={style}>{title}</Link>
    )
}

export default LinkPage;
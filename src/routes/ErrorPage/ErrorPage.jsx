import {useRouteError} from 'react-router-dom'
import './ErrorPage.scss'

function ErrorPage(){
    const error = useRouteError();
    console.error(error);

    return (
        <main className="error-screen h-screen bg-no-repeat bg-cover flex flex-col justify-center
            items-center gap-5">
            <h1 className="text-white font-bold text-6xl">Oops!</h1>
            <p className="text-white font-medium text-xl">Este lugar es desconocido</p>
            <p className="text-white font-medium text-xl"><em>Estatus: 
                    <span className="text-2xl"> {error.status}</span></em></p>
        </main>
    )
}

export default ErrorPage;
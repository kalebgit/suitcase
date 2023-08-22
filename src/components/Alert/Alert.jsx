import './Alert.scss'

function Alert({children}){
    return (
        <article className="alert absolute top-5 p-3 bg-sky-300 rounded-s-md ">
            <p className=" text-slate-600 font-bold space tracking-wide">{children}</p>
        </article>
    )
}

export default Alert;

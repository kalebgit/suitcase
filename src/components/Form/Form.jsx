// import useState from 'react';

function Form({title, children, otherClassName}){
    return (
        <form className="">
            <fieldset className={` ${otherClassName}`}>
                <legend className="">title</legend>
                {children}
            </fieldset>
        </form>
    )
}

export default Form;
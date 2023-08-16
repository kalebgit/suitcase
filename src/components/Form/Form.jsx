// import useState from 'react';

function Form({title, children, fieldsetClass, formClass, legendClass}){
    return (
        <form className={" " + formClass}>
            <fieldset className={" " + fieldsetClass}>
                <legend className={"text-center mb-5 " + legendClass}>{title}</legend>
                {children}
            </fieldset>
        </form>
    )
}

export default Form;
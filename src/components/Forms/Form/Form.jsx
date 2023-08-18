// import useState from 'react';

function Form({title, children, fieldsetClass, formClass, legendClass, onSubmit}){
    return (
        <form className={" " + formClass} onSubmit={onSubmit}>
            <fieldset className={" " + fieldsetClass}>
                <legend className={"text-center mb-5 " + legendClass}>{title}</legend>
                {children}
            </fieldset>
        </form>
    )
}

export default Form;
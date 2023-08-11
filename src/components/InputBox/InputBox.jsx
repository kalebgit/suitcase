// import useState from 'react'

function InputBox({hasLabel, type}){
    labelClass;
    inputClass;

    return (
        <div className="relative">
            <input className={inputClass}/>
            {hasLabel ? 
            <label className={labelClass}>
            </label> 
            : <></>}
        </div>
    )
}

export default InputBox;
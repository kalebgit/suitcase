// import useState from 'react'

//styles
import './InputBox.scss'


function InputBox({type, labelText, options, boxClass, inputClass, labelClass, onChangeHandler}){

    return (
        <>
            {type == "plaintext" ? 
                <div className={"relative pt-7 px-2 " + boxClass}>
                    <input type="text" className={" input-bar w-full py-1 outline-none " +
                        "bg-transparent " +  inputClass} onChange={onChangeHandler} required/>
                    <label className={"label-bar absolute " + labelClass}>{labelText}</label>
                </div> 
            : type == "date" ?
                <div className={"relative flex flex-row justify-start items-center gap-2 " + boxClass}>
                    <input type="date" value={getTodayDate} className={"order-2 " + inputClass} readOnly/>
                    <label className={" order-1 " + labelClass}>{labelText}</label>
                </div> 
            : type == "number" ? 
                <div className={"relative flex flex-row justify-start items-center gap-2 " + boxClass}>
                    <input type="number" min="1" step="1" className={"order-2 w-24 p-2 " + inputClass} onChange={onChangeHandler} required/>
                    <label className={" order-1 " + labelClass}>{labelText}</label>
                </div>
            : type == "select" ?
                <div className={"relative flex flex-row justify-start items-center gap-2 " + boxClass}>
                    <select className={"order-2 " + inputClass}>
                        {options.map((element, index)=><option key={index} value={element.value}>
                            {element.optionText}</option>)}
                    </select>
                    <label className={" order-1 " + labelClass}>{labelText}</label>
                </div>
            : type == "file" ? 
                <div className={"relative flex flex-row justify-start items-center gap-2 " + boxClass}>
                    <input type="file" className={"order-2 " + inputClass}/>
                    <label className={" order-1 " + labelClass}>{labelText}</label>
                </div>
            : <></>}
        </>
    )
}

export default InputBox;
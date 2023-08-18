import Form from '../../components/Forms/Form/Form'
import InputBox from '../../components/Forms/InputBox/InputBox'
import {useState} from 'react'

function Test(){
    const [inputText, setInputText] = useState("")

    const changeHandler = (e)=>{
        setInputText(e.target.value)
    }

    return (
        <main>
            {/* <Form formClass="bg-slate-200 p-4">
                <InputBox type="plaintext" labelText="Ingresa lo que quieras" boxClass="bg-slate-400" 
                    onChangeHandler ={changeHandler}/>
            </Form>

            {inputText.length > 0 ? 
            <>
                <h1>Escribiste: </h1>
                <p>{inputText}</p>
            </> : <></>} */}
            
        </main>
    )
}

export default Test;
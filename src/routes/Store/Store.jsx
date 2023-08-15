import {useState} from 'react'
import Button from '../../components/Button/Button'
import './Store.scss'

function Store(){
    const [isClickedAddProduct, setIsClickedAddProduct] = useState(false);

    const addProductClickHanlder = ()=>{
        setIsClickedAddProduct(true);
    }

    return (
        <main className=" min-h-screen">
            <Button type="button" content="Agregar Producto" otherClassName=" bg-purple-200"
            clickHandler={addProductClickHanlder}/>
            {isClickedAddProduct ? 
            <form method="" action="" className="bg-slate-200 w-full p-4">
                <div className="relative py-7">
                    <input type="text" className=" input-bar w-full py-1 outline-none 
                        bg-transparent border-b-2 border-slate-900" required/>
                    <label className="label-bar absolute left-0">Nombre de Usuario</label>
                </div>
            </form> 
            
            : <></>}
        </main>
    )
}

export default Store;
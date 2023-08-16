//components
import {useState, useEffect} from 'react'
import Button from '../../components/Button/Button'
import Form from '../../components/Form/Form'
import InputBox from '../../components/InputBox/InputBox'
import {useLoaderData} from 'react-router-dom'
import Product from '../../components/Product/Product'

//styles
import './Store.scss'

//images
import LoadingCat from '../../assets/img/store/loading-cat.gif'

function Store({cart}){

    const [products, setProducts] = useState(new Array());

    useEffect(() => {
        fetch('https://fakestoreapi.com/products')
        .then((response)=>{
            return response.json()
        })
        .then((data)=>{
            setProducts(data);
        })
        .catch((err)=>{
            console.log(err)
        })
    }, [])
    

    const addCartProduct = (e)=>{
        cart.setCart(cart.cart.push({id: id, title: title, price: price, description: description, 
            category: category, image: image}));
        console.log(cart.cart)
    }
    

    const [isClickedAddProduct, setIsClickedAddProduct] = useState(false);

    const categories = [{value: "", optionText: "Ropa"}, {value: "", optionText: "Electronicos"}, 
    {value: "", optionText: "Musica"}, {value: "", optionText: "Calzado"}, 
    {value: "", optionText: "Otro"}]

    const addProductClickHanlder = ()=>{
        if(isClickedAddProduct){
            setIsClickedAddProduct(false);
        }else{
            setIsClickedAddProduct(true);
        }
        
    }

    // const getTodayDate = ()=>{
    //     let date = new Date();
    //     let today = date.getFullYear().toString() + "-" + date.getMonth().toString() + 
    //     "-" + date.getDate().toString();
    //     return today;
    // }
    

    return (
        <main className=" min-h-screen">
            <section className=" p-4 flex flex-col flex-nowrap jusitfy-center gap-10">
                <Button type="button" content="Agregar Producto" otherClassName=" bg-purple-200"
                clickHandler={addProductClickHanlder}/>
                {isClickedAddProduct ? 
                <Form title="Agregar Producto" formClass="addProduct p-8 bg-amber-500 rounded-lg" 
                fieldsetClass="flex flex-col flex-nowrap justify-start gap-8" 
                legendClass="font-bold text-2xl text-slate-200">
                    <InputBox type="plaintext" labelText="Nombre Producto:" labelClass="text-slate-200" 
                    boxClass="bg-amber-500 rounded-lg addProduct__input"/>
                    <InputBox type="number" labelText="Precio: $" inputClass="addProduct__input
                        outline-none bg-amber-500 rounded-lg" labelClass="text-slate-200" />
                    <InputBox type="plaintext" labelText="Descripcion:" labelClass="text-slate-200" 
                    boxClass="bg-amber-500 rounded-lg addProduct__input"/>
                    <InputBox type="select" labelText="Categoria:" labelClass="text-slate-200" 
                    inputClass="addProduct__input outline-none bg-amber-500 rounded-lg text-slate-200
                    p-1"
                    options={categories}/>
                    {/* <InputBox type="file" labelText=""/> */}
                    <Button type="button" content="Agregar" otherClassName="addProduct__button 
                    bg-violet-50 text-lg" />
                </Form>
                : <></>}
            </section>
            <section className=" grid grid-cols-2 grid-flow-row auto-rows-fr justify-items-center 
            p-5 gap-x-5 gap-y-24">
                {products.length > 0 ? products.map((element, index)=><Product key={index} 
                {...element} clickHandler={addCartProduct}/>) : 
                
                    <img src={LoadingCat} alt="cargando" className="absolute"/>}
            </section>
        </main>
    )
}

export default Store;
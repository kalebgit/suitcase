//components
import {useState, useEffect} from 'react'
import Button from '../../components/Buttons/Button/Button'
import Form from '../../components/Forms/Form/Form'
import InputBox from '../../components/Forms/InputBox/InputBox'
import {useLoaderData} from 'react-router-dom'
import Product from '../../components/Product/Product'
import Loader from  '../Loader/Loader'

//styles
import './Store.scss'



function Store({cart}){
    const [isClickedAddProduct, setIsClickedAddProduct] = useState(false);
    const [products, setProducts] = useState(new Array());
    const [alert, setAlert] = useState(<></>);
    const [showAlert, setShowAlert] = useState(false);
    const [deleteAlert, setDeleteAlert] = useState(false);
    const [newProduct, setNewProduct] = useState({
        id: 0, 
        title: '', 
        price: 0, 
        description: '', 
        category: '', 
        image: ''
    });
    
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
        // cart.setCart(cart.cart.push({id: id, title: title, price: price, description: description, 
        //     category: category, image: image}));
        // console.log(cart.cart)

        setAlert(<Alert className={`${showAlert ? 'alert-fade' : ''} 
            ${deleteAlert ? 'alert-delete' : ''}`}>
            Producto Agregado</Alert>);
        setShowAlert(true);
        setTimeout(()=>{
            setDeleteAlert(true)
            setTimeout(() => {
                setAlert(<></>)
            }, 2000);
        }, 3000)

    }

    const changeFormProductHandler = ({id, value})=>{
        switch(id){
            case 'id':
                setNewProduct(
                    (prevState)=>{
                        return {
                            ...prevState,
                            id: value
                        }
                    }
                )
                break;
            case 'title':
                setNewProduct(
                    (prevState)=>{
                        return {
                            ...prevState,
                            title: value
                        }
                    }
                )
                break;
            case 'price':
                setNewProduct(
                    (prevState)=>{
                        return {
                            ...prevState,
                            price: value
                        }
                    }
                )
                break;
            case 'description':
                setNewProduct(
                    (prevState)=>{
                        return {
                            ...prevState,
                            description: value
                        }
                    }
                )
                break;
            case 'category':
                setNewProduct(
                    (prevState)=>{
                        return {
                            ...prevState,
                            category: value
                        }
                    }
                )
                break;
            case 'image':
                setNewProduct(
                    (prevState)=>{
                        return {
                            ...prevState,
                            image: value
                        }
                    }
                )
                break;
        }
        console.log(newProduct);
    }

    
    const submitHandler = (productToAdd)=>{
        const array = [{
            ...productToAdd,
            id: Math.floor(((Math.random() + 1) * 10))
        }]
        setProducts(
            (prevState)=>{
                return [...array, ...prevState];
            }
        )
    }

    

    const categories = [{value: "clothes", optionText: "Ropa"}, {value: "electronics", optionText: "Electronicos"}, 
    {value: "music", optionText: "Musica"}, {value: "shoes", optionText: "Calzado"}, 
    {value: "other", optionText: "Otro"}]

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
        <main className=" min-h-screen" id="store-main">
            
            <section className=" p-4 flex flex-col flex-nowrap jusitfy-center gap-10">
                <Button type="button" content="Agregar Producto" otherClassName=" bg-purple-200"
                clickHandler={addProductClickHanlder}/>
                {isClickedAddProduct ? 
                <Form title="Agregar Producto" formClass="addProduct p-8 bg-amber-500 rounded-lg" 
                fieldsetClass="flex flex-col flex-nowrap justify-start gap-8" 
                legendClass="font-bold text-2xl text-slate-200"
                onSubmit={(e)=>{
                    e.preventDefault();
                    submitHandler(newProduct);
                }}>
                    <InputBox type="plaintext" labelText="Nombre Producto:" labelClass="text-slate-200" 
                    boxClass="bg-amber-500 rounded-lg addProduct__input" id="title"
                    onChangeHandler={(event)=>{changeFormProductHandler(event.target)}}/>
                    <InputBox type="number" labelText="Precio: $" inputClass="addProduct__input
                        outline-none bg-amber-500 rounded-lg" labelClass="text-slate-200" id="price" 
                        onChangeHandler={(event)=>{changeFormProductHandler(event.target)}}/>
                    <InputBox type="plaintext" labelText="Descripcion:" labelClass="text-slate-200" 
                    boxClass="bg-amber-500 rounded-lg addProduct__input" id="description"
                    onChangeHandler={(event)=>{changeFormProductHandler(event.target)}}/>
                    <InputBox type="select" labelText="Categoria:" labelClass="text-slate-200" 
                    inputClass="addProduct__input outline-none bg-amber-500 rounded-lg text-slate-200
                    p-1" id="category"
                    options={categories}
                    onChangeHandler={(event)=>{console.log(event) 
                    changeFormProductHandler(event.target)}}/>
                    <InputBox type="url" labelText="Url imagen del producto:" labelClass="text-slate-200" 
                    boxClass="bg-amber-500 rounded-lg addProduct__input" id="image"
                    onChangeHandler={(event)=>{changeFormProductHandler(event.target)}}/>
                    {/* <InputBox type="file" labelText=""/> */}
                    <Button type="submit" content="Agregar" otherClassName="addProduct__button 
                    bg-violet-50 text-lg" />
                </Form>
                : <></>}
            </section>
            <section className=" grid grid-cols-2 grid-flow-row auto-rows-fr justify-items-center 
            p-5 gap-x-5 gap-y-24">
                {products.length > 0 ? products.map((element, index)=><Product key={index} 
                {...element} clickHandler={addCartProduct}/>) : 
                
                <Loader/>}
                
            </section>
        </main>
    )
}

export default Store;
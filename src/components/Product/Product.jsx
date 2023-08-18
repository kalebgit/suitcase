import Button from '../Buttons/Button/Button'

import './Product.scss'

function Product({id, title, price, description, category, image, clickHandler}){
    return (
        <article className="product p-4 rounded-md flex flex-col justify-between items-center gap-5">
            <img src={image} alt={title} className="product__image object-contain"/>
            <div className="flex flex-col justify-between items-center gap-5">
                <h2 className="text-xl font-bold text-center">{title}</h2>
                <p className="text-lg">${price}</p>
                <Button type="button" content="Agregar 🛒" otherClassName="bg-black text-white 
                text-lgfont-bold" onClick={clickHandler}/>
            </div>
        </article>
    )
}

export default Product
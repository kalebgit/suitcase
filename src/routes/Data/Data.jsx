import {useState, useEffect} from 'react'
import FilterContainer from '../../components/Filter/FilterContainer/FilterContainer'
import ChartContainer from '../../components/Chart/ChartContainer/ChartContainer'
import ChartBar from '../../components/Chart/ChartBar/ChartBar'
function Data(){
    const [sales, setSales] = useState([]);
    const filterOptions = [
        {optionText: "Mejor Valorados", value: "rated"}, 
        {optionText: "Mas vendidos", value: "sale"}
    ]

    useEffect(() => {
        fetch('https://fakestoreapi.com/products')
        .then((response)=>{
            return response.json()
        })
        .then((data)=>{
            setSales(data);
            setSales((prevState)=>{
                return prevState.map(({id, title, category, rating})=>{
                    return {id: id, title: title, category: category, ratin: rating, 
                        sales: (Math.random() * (500 - 1) + 1)}
                })
            })
        })
        .catch((err)=>{
            console.log(err)
        })
    }, [])



    

    return (
        <main className="p-5">
            <FilterContainer filterOptions={filterOptions} title="Graficas de Productos"
                formClass="bg-gray-200 rounded-lg p-4"
                legendClass="text-xl font-bold"
                boxClass="" 
                inputClass="rounded-md" 
                labelClass=""/>

            <ChartContainer>
                
            </ChartContainer>
        </main>
    )
}

export default Data;
import {useState, useEffect} from 'react'
import Loader from '../Loader/Loader'
import FilterContainer from '../../components/Filter/FilterContainer/FilterContainer'
import ChartContainer from '../../components/Chart/ChartContainer/ChartContainer'
import ChartBar from '../../components/Chart/ChartBar/ChartBar'
function Data(){
    const [sales, setSales] = useState([]);
    const [maxValue, setMaxValue] = useState(0);
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
                    return {id: id, label: title, category: category, rating: rating, 
                        sales: (Math.random() * (500 - 1) + 1)}
                })
            })
        })
        .catch((err)=>{
            console.log(err)
        })
    }, [])

    const changeHandler =(value)=>{
        switch(value){
            case "rated":
                setSales((prevState)=>{
                    prevState.sort((a, b)=>{
                        if(a.rating.rate > b.rating.rate){
                            return 1
                        }
                        else if(b.rating.rate > a.rating.rate){
                            return -1
                        }else{
                            return 0
                        }
                    })
                })
                setMaxValue(getMaxValue(sales.map((element)=>element.rating.rate)))
                break;
            case "sale": 
                setSales((prevState)=>{
                    prevState.sort((a, b)=>{
                        if(a.sales > b.sales){
                            return 1
                        }
                        else if(b.sales > a.sales){
                            return -1
                        }else{
                            return 0
                        }
                    })
                })
                setMaxValue(getMaxValue(sales.map((element)=>element.sales)))
        }
    }

    const getMaxValue = (array)=>{
        for(let element of array){
            max = element > max ? element : max;
        }

        return max;
    }

    

    
    let chart = <Loader/>

    const setBg = () => {
        const randomColor = Math.floor(Math.random()*16777215).toString(16);
        return "#" + randomColor;
    }

    if(sales.length > 0){
        chart = <ChartContainer>
            {sales.map((element)=>{
                <ChartBar key={element.id} {...element} maxValue={maxValue} color={setBg()}/>
            }
            )}
        </ChartContainer>
    }

    return (
        <main className="p-5">
            <FilterContainer filterOptions={filterOptions} title="Graficas de Productos"
                formClass="bg-gray-200 rounded-lg p-4"
                legendClass="text-xl font-bold"
                boxClass="" 
                inputClass="rounded-md" 
                labelClass=""
                onChangeHandler={changeHandler}/>

            
        </main>
    )
}

export default Data;
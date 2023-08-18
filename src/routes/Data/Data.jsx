import {useState, useEffect} from 'react'
import Loader from '../Loader/Loader'
import FilterContainer from '../../components/Filter/FilterContainer/FilterContainer'
import ChartContainer from '../../components/Chart/ChartContainer/ChartContainer'
import ChartBar from '../../components/Chart/ChartBar/ChartBar'
function Data(){
    const [sales, setSales] = useState([]);
    const [maxValue, setMaxValue] = useState(0);
    const filterOptions = [
        {optionText: "", value: ""},
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
                let object = prevState.map(({id, title, category, rating})=>{
                    return {id: id, label: id, category: category, rating: rating, 
                        sales: Math.floor((Math.random() * (500 - 1) + 1))}
                })
                console.log(object)
                return object
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
                    let object = prevState.sort((a, b)=>{
                        if(a.rating.rate > b.rating.rate){
                            return -1
                        }
                        else if(b.rating.rate > a.rating.rate){
                            return 1
                        }else{
                            return 0
                        }
                    })
                    console.log(object)
                    return object
                    
                })
                setSales((prevState)=>{
                    return prevState.map((element)=>{
                        return {...element, value: element.rating.rate}
                    })
                })
                setMaxValue(getMaxValue(sales.map((element)=>element.rating.rate)))
                break;
            case "sale": 
                setSales((prevState)=>{
                    let object = prevState.sort((a, b)=>{
                        if(a.sales > b.sales){
                            return -1
                        }
                        else if(b.sales > a.sales){
                            return 1
                        }else{
                            return 0
                        }
                    })

                    console.log(object)
                    return object
                })
                setSales((prevState)=>{
                    return prevState.map((element)=>{
                        return {...element, value: element.sales}
                    })
                })
                setMaxValue(getMaxValue(sales.map((element)=>element.sales)))
            default:
                
        }
    }

    const getMaxValue = (array)=>{
        let max = 0;
        for(let element of array){
            max = element > max ? element : max;
        }

        return max;
    }

    

    
    // let chart = <Loader/>
    let number = 1;
    const setBg = () => {
        let color;
        switch(number){
            case 1:
                color = "#279EFF";
                break;
            case 2: 
                color = "#C70039";
                break;
            case 3: 
                color = "#17594A";
                break;
        }
        number++;
        if(number == 4){
            number = 1;
        }
        return color;
    }

    // if(sales.length > 0){
        // chart = <ChartContainer>
        //     {sales.map((element)=>{
        //         <ChartBar key={element.id} {...element} maxValue={maxValue} color={setBg()}/>
        //     }
        //     )}
        // </ChartContainer>
    // }
    
    return (
        <main className="p-5">
            <FilterContainer filterOptions={filterOptions} title="Graficas de Productos"
                formClass="bg-gray-200 rounded-lg p-4"
                legendClass="text-xl font-bold"
                boxClass="" 
                inputClass="rounded-md" 
                labelClass=""
                onChangeHandler={(e)=>{changeHandler(e.target.value)}}/>
            {sales.length === 0 && <Loader/>}
            {sales.length > 0 && 
            <ChartContainer>
                {sales.map((element)=>{
                    return <ChartBar key={element.id} {...element} maxValue={maxValue} color={setBg()}/>
                }
                )}
            </ChartContainer>
            }
        </main>
    )
}

export default Data;
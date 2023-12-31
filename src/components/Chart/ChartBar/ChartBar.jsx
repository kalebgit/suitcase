

function ChartBar({value, maxValue, label, color}){
    console.log(value)
    console.log(maxValue)

    return (
        <article className="h-44 w-1/3 md:w-1/6 ">
            <div className="relative h-5/6 w-full">
                <div className="absolute bottom-0 w-full" 
                    style={{height: `${(value * 100) / maxValue}%`, backgroundColor: color}}>

                </div>
            </div>
            <p className="h-1/6 text-sm text-center font-bold">{label}</p>
        </article>
    )
}

export default ChartBar;
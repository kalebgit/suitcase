

function ChartBar({value, maxValue, label, color}){
    return (
        <article className="h-full w-full">
            <div className=" h-5/6 w-full">
                <div style={{height: `${(value * 100) / maxValue}%`, backgroundColor: color}}>
                    
                </div>
            </div>
            <p className="h-1/6">{label}</p>
        </article>
    )
}

export default ChartBar;
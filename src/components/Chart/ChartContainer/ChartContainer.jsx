

function ChartContainer({children, numberBars}){
    return (
        <section className="flex flex-row flex-nowrap justify-center items-center">
            {children}
        </section>
    )
}

export default ChartContainer;
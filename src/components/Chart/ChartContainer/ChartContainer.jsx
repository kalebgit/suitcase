

function ChartContainer({children, numberBars}){
    return (
        <section className=" columns-2 flex flex-row flex-nowrap justify-center items-center">
            {children}
        </section>
    )
}

export default ChartContainer;
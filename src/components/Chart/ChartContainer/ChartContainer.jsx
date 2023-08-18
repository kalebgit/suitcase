

function ChartContainer({children}){
    return (
        <section className="w-full columns-3 flex flex-row  flex-wrap justify-center items-center">
            {children}
        </section>
    )
}

export default ChartContainer;
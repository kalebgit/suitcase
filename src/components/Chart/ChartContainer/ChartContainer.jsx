

function ChartContainer({children}){
    return (
        <section className="w-full flex flex-row  flex-wrap justify-center items-center gap-y-5">
            {children}
        </section>
    )
}

export default ChartContainer;
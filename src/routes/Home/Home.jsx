//images
import Clothes from '../../assets/img/home/background-clothes.jpg'
import Music from '../../assets/img/home/background-music.jpg'
import Electronics from '../../assets/img/home/background-electronics.jpg'
import Shoe from '../../assets/img/home/shoe.png'

//components
import CardBoard from '../../components/CardBoard/CardBoard'
import ViewCard from '../../components/ViewCard/ViewCard'

//styles
import './Home.scss'

function Home(){
    const cardboards = [
        {
            title: "Tienda Emi",
            titleSize: "text-6xl",
            content: "Tenemos los mejores productos de cualquier categoria, de alta calidad y " +  
                    "muchos de nuestros clientes los recomiendan",
            contentStyle: "text-2xl text-center",
            className: " home__cardboard h-screen px-8 py-24 grid grid-cols-1 grid-rows-5 " +
                "grid-flow-row gap-6 justify-items-center items-center  ",
            hasImage: false,
            hasButton: true,
            button: {
                type: "button",
                content: "Ver mas",
                otherClassName: " bg-white text-xl",
                path: ""
            }
        }
    ]

    const viewcards = [
        {
            title: "Ropa",
            announce: "Ver ropa",
            background: Clothes,
        },
        {
            title: "Instrumentos",
            announce: "Ver instrumentos",
            background: Music,
        },
        {
            title: "Electronicos",
            announce: "Ver electronicos",
            background: Electronics,
        }
    ]

    return (
        <main className="home">
            <CardBoard {...cardboards[0]}/>
            <section className="h-screen p-10 grid grid-cols-1 grid-rows-3 grid-flow-row 
                justify-items-center items-center gap-10 ">
                {viewcards.map((element, index)=><ViewCard key={index} {...element}/>)}
            </section>
        </main>
    )
}

export default Home;
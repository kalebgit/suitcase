//images
import Gmail from '../../assets/img/gen/gmail.png'
import Facebook from '../../assets/img/gen/facebook.png'
import Instagram from '../../assets/img/gen/instagram.png'

//components
import FooterColumn from '../FooterColumn/FooterColumn';

function Footer(){

    const columns = [
        {
            title: "Contacto",
            text: "Si necesitas algun tipo de contacto con la empresa" +
                "tenemos las siguientes opciones: ",
            images: [
                {
                    imageResource: Gmail,
                    altMessage: "gmail",
                    otherClassName: "",
                },
                {
                    imageResource: Instagram,
                    altMessage: "instagram",
                    otherClassName: "",
                },
                {
                    imageResource: Facebook,
                    altMessage: "facebook",
                    otherClassName: "",
                }
            ]
        },
        {
            title: "Sobre Nosotros",
            text: "Somos una empresa que se dedica a brindar el mejor servicio y los mejores viajes" + 
            " alrededor del mundo, la experiencia es unica y muchos de nuestros clientes lo" + 
            " recomiendan como mejor opcion para conocer los increibles lugares que nos rodean",
        }

    ]


    return (
        <footer className="bg-slate-100 flex flex-col flex-nowrap justify-start items-center
        gap-12">
            {columns.map((element, index)=><FooterColumn key={index} {...element}/>)}
        </footer>
    )
}

export default Footer;
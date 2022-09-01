//Hooks
import { useState } from 'react'

//Components
import Header from "pages/Header"
import Footer from "pages/Footer"
import Hero from './Hero'
import Banner from './Banner'
import Card from './Card'
import Main from './Main'

//Imagens
import IconStar from '../../svg/icon-star.svg'

//API
import api from 'services/api'

export default function Home() {

    //Variaveis de estado
    const [main, setMain] = useState([])
    const [monstseen, setMostseen] = useState([])
    const [banner, setBanner] = useState([])

    //Quando o componente montar ele vai fazer essa função abaixo
    useState(() => {

        //requisição para o componente Main
        api.get('/posts?star=5&_limit=2&_order=desc')
        .then((response) => {
            setMain(response.data)
        })

        //requisição para o componente Card
        api.get('/posts?_limit=3')
        .then((response) => {
            setMostseen(response.data)
        })

        //requisição para o componente Banner
        api.get('/posts?_sort=date&_order=desc&_limit=1')
        .then((response) => {
            setBanner(response.data)
        })

    }, [])

    return (
        <>

            <Header/>

            <Hero/>

            <section className="container">
                <div className="row">
                    <div className="grid-5 pt-5 pb-3">
                        <img src={IconStar} className="icon-l" alt="IconStart"/>
                        <h2 className="mt-1">Os melhores e mais bem votados posts do mês.</h2>
                        <p className="mt-2">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                            Ornare urna pharetra ut ac, pellentesque. 
                        </p>
                    </div>
                    <div className="grid-7">

                        {
                            main.map(item => {
                                return <Main key={item.id} content={item}/>
                            })
                        }

                    </div>
                </div>
            </section>

            <div className="bg-section">
                <section className="container">
                    <h3 className="ml-2 mb-3">Mais vistos</h3>
                    <div className="row">
                        {
                            monstseen.map((item) => {
                                return <Card key={item.id} content={item}/>
                            })
                        }
                    </div>
                </section>
            </div>

            {
                banner.map((item) => {
                    return <Banner key={item.id} content={item}/>
                })
            }

            <Footer/>

        </>
    )
}
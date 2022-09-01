//Components
import Header from "pages/Header"
import Footer from "pages/Footer"

//Imagens
import LogoBlog from 'svg/blog.svg'

export default function About() {
    return (
    <>
        <Header />

        <section className="container flex-center">
                <div className="row mt-9">
                    <div className="grid-4">
                        <h1 className="h0">blog<span>.</span> </h1>
                        <p>
                            O Blog é um projeto desenvolvido em React.js para o curso
                            FrontPUSH. Clique abaixo para saber mais.
                        </p>
                        <a href="#Link" className="btn mt-2">Saber mais</a>

                    </div>
                    <div className="grid-1"></div>
                    <div className="grid-6 flex-center">
                        <img src={LogoBlog} className="ilustration" alt="LogoBlog"/>
                    </div>
                    <div className="grid-1"></div>
                </div>
            </section>

        <Footer />
    </>
    )
}
//Components
import Header from "pages/Header"
import Footer from "pages/Footer"

//Imagens
import BlogLogo from '../../svg/blog-logo2.svg';

//Link
import { Link } from 'react-router-dom'

export default function NotFound() {
    return (
    <>
        <Header />

        <section className="container">
            <div className="row flex-center">
                <img src={BlogLogo} className="icon-l" alt="" />
            </div>

            <div className="row">
                <div className="grid-4 disappear"></div>
                <div className="grid-4">

                    <h1 className="h0 text-center color-primary">404</h1>
                    <h5 className="text-center">Página não encontrada!</h5>
                    <p className="text-center mt-1">
                        A página que você tá procurando não existe 
                        ou foi removida. Clique para voltar 
                        para o site.
                    </p>

                    <Link to="/" className="btn w-100 mt-3">Voltar p/ home</Link>
                </div>
                <div className="grid-4 disappear"></div>
            </div>
        </section>

        <Footer />
    </>
    )
}
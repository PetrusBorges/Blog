//Imagens
import LogoBlog from 'svg/blog-logo2.svg'
import Facebook from 'svg/icon-facebook.svg'
import Instagram from 'svg/icon-instagram.svg'
import Youtube from 'svg/icon-youtube.svg'
import Twitter from 'svg/icon-twitter.svg'

export default function Footer() {
  return (
    <>
      <footer className="bg-section bt-black">
        <section className="container pb-0 ">
            <div className="row flex-center">
                <img src={LogoBlog} className="icon-l" alt="LogoBlog"/>
            </div>

            <div className="row pb-3 bb-black">
                <div className="grid-3">
                    <h4>Posts</h4>
                    <div className="flex-start-column mt-2">
                        <a href="#Link" className="color-gray link-footer">Mais vistos</a>
                        <a href="#Link" className="color-gray link-footer">Mais comentados</a>
                        <a href="#Link" className="color-gray link-footer ">Mais populares</a>
                        <a href="#Link" className="color-gray link-footer">Mais recentes</a>
                    </div>
                    
                </div>

                <div className="grid-3">
                    <h4>Categorias</h4>
                    <div className="flex-start-column mt-2">
                        <a href="#Link" className="color-gray link-footer">Tecnologia</a>
                        <a href="#Link" className="color-gray link-footer">Games</a>
                        <a href="#Link" className="color-gray link-footer">Fotografia</a>
                        <a href="#Link" className="color-gray link-footer">Cinema</a>
                    </div>
                </div>

                <div className="grid-6">
                    <h4 className="mb-2">Quer ser avisado dos novos posts do blog?</h4>
                    <p>
                        Informe seu e-mail abaixo:
                    </p>
                    <div className="flex-start-row mt-2">
                        <input type="text" name="search" id="" placeholder="Digite seu e-mail aqui"/>
                        <button className="btn ml-2">Cadastrar</button>
                    </div>
                </div>
            </div>

            <div className="row">
                <div className="grid-9">
                    <p>2021 | Todos os direitos reservados. Projeto de React.js do curso <a href="https://www.frontpush.com.br/" target="_blank" rel="noreferrer">FrontPUSH.</a></p>
                </div>

                <div className="grid-3">
                    <a href="#Link"><img src={Facebook} className="icon-s" alt="LogoFacebook"/></a>
                    <a href="#Link"><img src={Instagram} className="icon-s ml-2" alt="LogoInstagram"/></a>
                    <a href="#Link"><img src={Youtube} className="icon-s ml-2" alt="LogoYoutube"/></a>
                    <a href="#Link"><img src={Twitter} className="icon-s ml-2" alt="LogoTwitter"/></a>
                </div>
            </div>

        </section>
    </footer>
    </>
  )
}
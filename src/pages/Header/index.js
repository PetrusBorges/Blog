//Hooks
import { useState } from 'react'

//Imagens
import LogoHeader from 'svg/blog-logo.svg'

//Link
import { Link, useNavigate } from 'react-router-dom'

export default function Header() {

  //variavel de estado do menu
  const [openMenuMobile, setMenuMobile] = useState(false) //EVENTOS

  //busca
  const initialValueForm = {
    search: ''
  }

  //variavel de estado do campo busca
  const [form,setForm] = useState(initialValueForm)

  //usenavigate para redirecionar
  const navigate = useNavigate()

  function onChange(event) {

    //desestruturação do nome e valor do input
    const {value, name} = event.target

    //pegando o valor antigo e adicionando o caracter novo
    setForm({...form, [name]:value})
  }

  function handleSearch(event) {
    event.preventDefault()

    navigate(`/search/${form.search}`)
  }

  return(
    <>
      <header className='px-2 py-1'>
        <nav>
          <div className="logo">
            <Link to="/"><img src={LogoHeader} alt="Logo" /></Link>
          </div>
          <div className="menu">
            <li><Link to="/about" className='p-1'>Sobre</Link></li>
            <li><Link to="/contact" className='p-1'>Contato</Link></li>
          </div>
        </nav>

        <div className={`bx ${openMenuMobile? 'activebx' : 'inactive'}`} onClick={() => {setMenuMobile(!openMenuMobile)}}></div>

        <div className="flex-start-row">
          <div className="search">
            <form className='flex' onSubmit={handleSearch}>
              <input type="text" name='search' placeholder="Buscar..." onChange={onChange}/>
              <button className="btn-search"></button>
            </form>
          </div>

          <div className="cta-desktop ml-3">
            <Link to="/login" className='btn'>Login</Link>
          </div>

          <div className="cta-mobile mr-1">
          <Link to="/login" className='link'>Login</Link>
          </div>
        </div>
      </header>

      <div className="relative">
        <div className={`menu-mobile ${openMenuMobile? 'showmenu' : 'inactive'}`} onClick={() => {setMenuMobile(!openMenuMobile)}}>
          <ul className="nav-mobile">
            <li><Link to="/about" className='link-menu-mobile'>Sobre</Link></li>
            <li><Link to="/contact" className='link-menu-mobile'>Contato</Link></li>
            <li className="py-2 px-2">
              <form className='flex'>
                <input type="text" name='search' placeholder="Buscar..."/>
                <button className="btn-search"></button>
              </form>
            </li>
          </ul>
        </div>
      </div>
    </>
  )
}
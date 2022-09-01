//Components
import Header from "pages/Header"
import Footer from "pages/Footer"
import Card from "pages/Home/Card"

//Hooks
import { useParams } from 'react-router'
import { useState, useEffect } from 'react'

//API
import api from "services/api"

export default function Search() {

  const {word_search} = useParams()

  //variaveis de estado
  const [word, setWord] = useState(word_search)
  const [search, setSearch] = useState([])
  const [form,setForm] = useState([])

  useEffect(() => {

    if(word) {
      api.get(`/posts?q=${word}`)
      .then((response) => {
        setSearch(response.data)
      })
    }

  }, [word])

  function handleSearch(event) {
    event.preventDefault()

    setWord(form.search)

  }

  function onChange(event) {

    const {value, name} = event.target

    setForm({...form, [name]:value})
  }

  return (
      <>
        <Header />
          <section className="container">
            <h6 className="uppercase color-primary text-center">{search.length} resultados</h6>
            <h4 className="text-center">"{word}"</h4>
            <form onSubmit={handleSearch}>
              <div className="row">
                <div className="grid-2 desappear"></div>
                <div className="grid-8 flex-center">
                  <input type="text" name="search" placeholder="Buscar..." onChange={onChange} />
                  <button className="btn ml-2">Buscar</button>
                </div>
                <div className="grid-2 desappear"></div>
              </div>
            </form>
            <div className="row">
                {
                    search.map((item) => {
                        return <Card key={item.id} content={item}/>
                    })
                }
            </div>
          </section>
        <Footer />
      </>
  )
}
//Components
import Header from "pages/Header"
import Footer from "pages/Footer"

//Hooks
import { useState, useEffect } from "react"
import { useParams } from 'react-router-dom'

//Api
import api from 'services/api'

export default function Post() {

  //variavel de estado
  const [post,setPost] = useState([])
  const [user,setUser] = useState([])

  const { idPost } = useParams()

  useEffect(() => {

    if(idPost) {
      api.get('/posts/' + idPost)
      .then((response) => {
        setPost(response.data)

        api.get('/user/' + response.data.id_user)
        .then((response) => {
          setUser(response.data)
        })
      })
    }

  })

  return (
      <>
        <Header />
        
        <section class="container">
          <h6 class="uppercase color-primary text-center">{post.category}</h6>
          <h3 class="text-center">{post.title}</h3>

          <div class="flex-center my-3">
            <div class="profile">
                <img src={user.ImageProfile} class="profile-img" alt="LogoProfile" />
            </div>
            <div class="ml-2">
                <h6 class="color-primary">{user.name} {user.surname}</h6>
                <h6 class="color-gray">{user.user}</h6>
            </div>
            <p class="ml-4">{post.date} - {post.duration}min</p>
          </div>

          <div class="img-banner hidden">
            <img src={post.imageUrl} alt="BackGround" />
          </div>

          <div class="row my-3">
            <h4>{post.title}</h4>
            <p class="mt-1">
                {post.content}
            </p>
          </div>

          <div class="row">
            <div class="grid-3 disappear"></div>
            <div class="grid-6 card">
                <div class="row">
                    <div class="grid-3 flex-center pl-1">
                        <div class="profile-big">
                          <img src={user.ImageProfile} class="profile-img" alt="LogoProfile" />
                        </div>
                    </div>
                    <div class="grid-9">
                        <h6 class="color-primary">{user.name} {user.surname}</h6>
                        <h6 class="color-gray">{user.user}</h6>
                        <p class="mt-1">
                            {user.description}
                        </p>
                    </div>
                </div>
            </div>
            <div class="grid-3 disappear"></div>
          </div>
    </section>

        <Footer />
      </>
  )
}
import React from 'react'
import ListaCategorias from '../components/ListaCategorias'
import ListaPost from '../components/ListaPost'
const Home = () => {

  return (
    <main>
      <div className="container">
        <h2 className="titulo-pagina">Pet notícias</h2>
      </div>asdas
      <ListaCategorias />
      <ListaPost url={'/posts'} />
    </main>ssss
    
  )
}

export default Home

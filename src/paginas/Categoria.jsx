import React, { useState, useEffect } from 'react'
import { Route, useParams, useRouteMatch } from 'react-router-dom'
import { busca } from '../api/api'
import { ListaCategorias } from '../components/ListaCategorias'
import { ListaPost } from '../components/ListaPost'
import '../assets/css/blog.css'

const Categoria = () => {
  const { id } = useParams()
  const { path } = useRouteMatch()
  const [ subCategoria, setSubCategoria ] = useState([])

  useEffect(() => {
    busca(`/categorias/${id}`, (categoria) => {
      setSubCategoria(categoria.subcategorias)
    })
  }, [id])
  return(
    <>
      <div className="container">
        <h2 className="titulo-pagina">Pet Notícias</h2>
      </div>

      <ListaCategorias />

      <Route exact path={`${path}`}>
        <ListaPost url={`/posts?categoria=${id}`}/>
      </Route>
    </>
  )
}

export default Categoria

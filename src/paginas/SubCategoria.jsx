import React from 'react'
import { useParams } from 'react-router-dom'
import { ListaPost } from '../components/ListaPost.jsx'

export function SubCategoria() {
  const { subcategoria } = useParams()
  return (
    <ListaPost url={`/posts?subcategoria=${subcategoria}`} />
  )
}

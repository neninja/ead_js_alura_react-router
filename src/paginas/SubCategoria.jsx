import React from 'react'
import { useParams } from 'react-router-dom'

export function SubCategoria() {
  const { subCategoria } = useParams()
  return (
    <ListaPost url={`/posts?subcategorias=${subcategoria}`} />
  )
}

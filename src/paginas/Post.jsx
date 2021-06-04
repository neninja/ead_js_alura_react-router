import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { busca } from '../api/api'
import '../assets/css/post.css'

export function Post() {
  const { id } = useParams()
  const [ post, setPost ] = useState({})

  useEffect(() => {
    busca(`/posts/${id}`, setPost)
  }, [id])

  return (
    <main className="container flex flex--centro">
      <article className="cartao post">
        <h2 className="cartao_titulo">{post.title}</h2>
        <p className="cartao__texto">{post.body}</p>
      </article>
    </main>
  )
}
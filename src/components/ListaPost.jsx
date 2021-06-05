import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { busca } from '../api/api'

export function ListaPost({ url }) {
  const [posts, setPosts] = useState([])

  useEffect(() => {
    busca(url, setPosts)
  }, [url])

  return (
    <section className="posts container">
      {
        posts.map((post) => (
          <Link className={`cartao-post cartao-post--${post.categoria}`} to={`/posts/${post.id}`} key={post.id}>
            <article>
              <h3>{post.title}</h3>
              <p className="cartao-post__meta">{post.metadescription}</p>
            </article>
          </Link>
        ))
      }
    </section>
  )
}

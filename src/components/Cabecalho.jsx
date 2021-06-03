import React from 'react'
import imagem from '../assets/img/doguito.svg'
import '../assets/css/componentes/cabecalho.css'

export function Cabecalho(){
  return (
    <header className="cabecalho">
      <div className="menu-hmaburger">
        <span className="menu-haburger__icone">
        </span>
      </div>
      <div className="cabecalho-container">
        <a href="/" className="flex flex--centro">
          <img className="cabecalho__logo" src={imagem} alt=""/>
          <h1 className="cabecalho__titulo">PetShop</h1>
        </a>
      </div>

      <nav className="menu-cabecalho">
        <ul className="menu-itens">
          <li>
            <a href="#" className="menu-item menu-item--entrar">Entrar</a>
          </li>
          <li>
            <a href="#" className="menu-item">Produtos</a>
          </li>
          <li>
            <a href="/" className="menu-item">Blog</a>
          </li>
          <li>
            <a href="/sobre" className="menu-item">Sobre</a>
          </li>
        </ul>
      </nav>
      <div className="menu-cabecalho-background"></div>
    </header>
  )
}

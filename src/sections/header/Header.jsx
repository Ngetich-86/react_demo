import React from 'react'
import data from './data';
import HeaderImage from '../../assets/header.jpg'
import './header.css'

const Home = () => {
  return (
    <header id="home">
      <div className="container header__cointainer">
        <div className="header__profile">
          <img src={HeaderImage} alt="Potrait" />
        </div>
        <h3>Gideon Ngetich</h3>
        <p>
          Hello there! , 
          Welcome to my website. <br/>
          I'm a fronted web developer with ReactJS 
        </p>
        <div className="header__cta">
          <a href="#contact" className='btn primary'>Lets Talk</a> 
          <a href="#portfolio" className='btn light'>My work</a>
        </div>

        <div className="header__socials">
          {
           data.map(item => <a key={item.id} href={item.link} target='_blank' rel='noopener noreferrer'>{item.icon} </a>) 
          }
        </div>
      </div>
    </header>
  )
}

export default Home
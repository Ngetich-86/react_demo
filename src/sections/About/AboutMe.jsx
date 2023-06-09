import React from 'react'
import AboutImage from '../../images/webdev.gif';
import Resume from '../../images/resume.pdf';
import { HiDownload } from 'react-icons/hi'
import Cards from '../../components/cards';
import data from './data';
import './about.css';
const AboutMe = () => {
  return (
    <section id="about">
      <div className="container about__container">
        <div className="about__left">
          <div className="about__portrait">
            <img src={AboutImage} alt="Aboutpic" />
          </div>
        </div>
        <div className="about__right">
          <h2>About me</h2>
          <div className="about__cards">
            {
              data.map(item => (
                <Cards key={item.id} className='about__card'>
                  <span className='about__card-icon'> {item.icon}</span>
                  <h5>{item.title}</h5>
                  <small>{item.desc}</small>
                </Cards>
              ))
              }
          </div>
          <p>
            I am a web developer with a focus on building user-friendly interfaces using ReactJS.
            With over a year of experience in the industry, I have honed my skills in front-end technologies and am always
            looking to stay up to date on the latest developments.
            I also have experience working with cloud computing platforms, specifically Azure. Whether you're
            looking to build a new website or improve upon an existing one, I am dedicated to delivering high-quality,
            reliable solutions that meet your needs.
          </p>

          <p>
          I also have experience working with cloud computing platforms, specifically Azure. Whether you're
            looking to build a new website or improve upon an existing one, I am dedicated to delivering high-quality,
            reliable solutions that meet your needs.
          </p>
          <a href={Resume} download className='btn primary'>Download Resume
            <HiDownload /> </a>   
        </div>

      </div>
   </section>
  )
}

export default AboutMe

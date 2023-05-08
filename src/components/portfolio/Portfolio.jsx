import React, { useState } from 'react'
import "./Portfolio.css"
import Menu from './Menu'

const Portfolio = () => {
  const [items, setItems] = useState(Menu);

  return (
    <section className='work container section' id='work'>
      <h2 className="section__title">Trabalhos</h2>
      <div className="work__container grid">
        {items.map((elem) => {
          const{id, image, title, description, href} = elem;
          return (
            <div className="work__card" key={id}>
              <div className="work_thumbnail">
                <img src={image} alt="" className='work__img' />
                <div className="work__mask"></div>
              </div>
              <div className="work__ap">
                <h3 className="work__title">{title}</h3>
                <h4 className="work__desc">{description}</h4>
              </div>
              <a href={href} className="work__button">
                <i className="icon-link work__button-icon"></i>
              </a>
            </div>
          )
        })}
      </div>
    </section>
  )
}

export default Portfolio

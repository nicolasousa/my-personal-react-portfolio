import "./About.css";
import Image from '../../assets/imgs/fotonico.jpg'

const About = () => {
  return (
    <section className="about container section" id='about'>
      <h2 className="section__title">Sobre Mim</h2>

      <div className="about__container grid">
        <img src={Image} alt="" className='about__img'/>

        <div className="about__data grid">
          <div className="about__info">
            <p className="about__description">Aprender coisas novas e me conectar com pessoas são os tipos de experiência que mais gosto. Sou uma pessoa comunicativa, proativa, e determinada com meus afazeres visando meu desenvolvimento dia após dia.</p>
            <a href="" className='btn'></a>
          </div>

          {/* <div className="about__skills grid">
            <div className="skills__data">
              <h3 className="skills__name">Developer</h3>
              <span className="skills__number"></span>
            </div>

          </div> */}



        </div>
      </div>
    </section>
  )
};

export default About

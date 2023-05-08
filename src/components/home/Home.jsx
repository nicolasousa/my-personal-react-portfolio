import "./Home.css"
import HomeSocials from './HomeSocials';
import ScrollDown from './ScrollDown';
import MyPhoto from '../../assets/imgs/nico.jpg'

const Home = () => {
  return (
    <div>
      <section className="home container" id='home'>
        <div className="intro">
          <img src={MyPhoto} alt="" className='home__img' />
          <h1 className="home__name">Nicolas de Sousa Alves</h1>
          <span className="home__education">Desenvolvedor Full-stack</span>
          <HomeSocials/>
          
          <a href="#contact" className='btn'>Contacte-me</a>

          <ScrollDown/>
        </div>
      </section>
    </div>
  );
}

export default Home

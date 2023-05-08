import './Home.css';
const HomeSocials = () => {
  return (
    <div className='home__socials'>
        <a href="https://www.linkedin.com/in/nicolas-alves-539b91256/" className='home__social-link' target='_blank'>
            <i className="fa-brands fa-linkedin"></i>
        </a>
        
        <a href="https://github.com/nicolasousa" className='home__social-link' target='_blank'>
            <i className="fa-brands fa-github"></i>
        </a>

        <a href="https://www.instagram.com/niicolasousa/" className='home__social-link' target='_blank'>
            <i className="fa-brands fa-instagram"></i>
        </a>
    </div>
  )
}

export default HomeSocials

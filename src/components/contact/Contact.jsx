import './Contact.css';

const Contact = () => {
  return (
    <div>
      <section className="contact container section" id='contact'>
        <h2 className="section__title">Gostou do que viu por aqui?</h2>
        <div className="contact__info">
            <h3 className="contact__title">Entre em contato. Dê suas críticas.</h3>
            <p className="contact__details">Abaixo você pode me mandar um e-mail</p>
        </div>

        <form action="" className="contact__form">
            <div className="contact__form-group">
                <div className="contact__form-div">
                    <input type="email" name="" className='contact__form-input' id="" placeholder='Insira seu email' />
                </div>
                <div className="contact__form-div">
                    <input type="text" name="" className='contact__form-input' id="" placeholder='Insira o assunto' />
                </div>
                <div className="contact__form-div contact__form-area">
                    <textarea name="" id="" cols="30" rows="10"
                        className='contact__form-input' placeholder='Digite sua Mensagem!'></textarea>
                </div>
            </div>

            <button className="btn">Enviar Mensagem</button>
        </form>
      </section>
    </div>
  )
}

export default Contact

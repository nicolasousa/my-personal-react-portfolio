import Langs from "./Langs"
import LangBox from "./LangBox"
import './Languages.css'

const Languages = () => {
  return (
    <section className="container__languages">
      <div className="box__column">
        {Langs.map((val, id) => {
          if(id <= 2){
            return(
                <LangBox key={id}
                    image={val.image}
                    title={val.title}
                    desc={val.desc}/>
            )
          }
        })}
      </div>
      <div className="box__column">
        {Langs.map((val, id) => {
          if(id > 2){
            return(
                <LangBox key={id}
                    image={val.image}
                    title={val.title}
                    desc={val.desc}/>
            )
          }
        })}
      </div>
    </section>
  )
}

export default Languages

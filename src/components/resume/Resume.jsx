import "./Resume.css";
import Data from './Data';
import Card  from './Card';

const Resume = () => {
  return (
    <section className="resume container" id="resume">
      <h2 className="section__title">Experiências e Formações</h2>

      <div className="resume__container grid">
        <div className="timeline grid">
          {Data.map((val, id) => {
            if(val.category === 'education'){
              return(
                <Card key={id} 
                  icon={val.icon} 
                  title={val.title} 
                  year={val.year} 
                  desc={val.desc}/>
              )
            }
          })}
        </div>

        <div className="timeline grid">
          {Data.map((val, id) => {
            if(val.category === 'course'){
              return(
                <Card key={id} 
                  icon={val.icon} 
                  title={val.title} 
                  year={val.year} 
                  desc={val.desc}/>
              )
            }
          })}
        </div>

        {/* <div className="timeline grid">
          {Data.map((val, id) => {
            if(val.category === 'course'){
              return(
                <Card key={id} 
                  icon={val.icon} 
                  title={val.title} 
                  year={val.year} 
                  desc={val.desc}/>
              )
            }
          })}
        </div> */}

      </div>
    </section>
  )
}

export default Resume

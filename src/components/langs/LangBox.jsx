
const LangBox = (props) => {
  return (
    <div className="language__box">
        <img src={props.image} alt="" className="language__image"/>
        <h3 className="language__title">{props.title}</h3>
        <p className="language__desc">{props.desc}</p>
    </div>
  )
}

export default LangBox

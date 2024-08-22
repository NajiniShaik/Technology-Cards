import './index.css'

const CardItem = props => {
  const {cardDetails} = props
  const {title, description, imgUrl, className} = cardDetails

  return (
    <li className={`card ${className}`}>
      <h1 className="title">{title}</h1>
      <p className="description">{description}</p>
      <div className="img-card">
        <img src={imgUrl} className="img" alt={title} />
      </div>
    </li>
  )
}

export default CardItem

import './Product.css'

const Product = ({title,price,feature}) => {
    let list = feature.map((feat)=>
        <li>{feat}</li>
    )
  return (
    <div className='Product'>
        <h4>Title: {title}</h4>
        <p>Price: {price}</p>
        <h3>Feature: {list}</h3>
    </div>
  )
}

export default Product
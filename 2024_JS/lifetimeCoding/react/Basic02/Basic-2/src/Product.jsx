import './Product.css'
import Price from './Price'

const Product = ({title,desc,idx}) => {
  let oldPrices = ["12,000","10,000","1,200","1,000"]
  let newPrices = ["10,000","8000","1,000","800"]
// let isDiscount = price>=10000 ? "Discount of 5%" : null
    // let list = feature.map((feat)=>
    //     <li>{feat}</li>
    // )
    
      return (
        <div className='Product'>
            {/* <h4>Title: {title}</h4>
            <p>Price: {price}</p>
            <h3>{isDiscount}</h3> */}
            <h3>{title}</h3>
            <p>{desc}</p>
            <Price oldPrice={oldPrices[idx]} newPrice={newPrices[idx]} />
            <button>Order Now</button>
        </div>
      )
    
   

}

export default Product
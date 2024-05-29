import React from 'react'
import Product from './Product'
const productGroup = () => {
  let options = ["fast","durable","reliable"]
  console.log(options);
  return (
    <div>    
    <Product title="laptop" price="30,000" feature={options}/>
    <Product title="mobile" price="10,000" />
    <Product title="ring" price="100" />
    <Product title="pen" price="10" />
    </div>
  )
}

export default productGroup
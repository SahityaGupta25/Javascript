import React from 'react'
import Product from './Product'
// import User from './user'
const productGroup = () => {
  
  // let options = ["fast","durable","reliable"]
  // console.log(options);
  let styles = {
    height: "100vh",
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "center",
    alignItems: "center"
  }
  return (
    <div style={styles}>    
    {/* <User userName="Mathew" textColor="orange"/> */}
    {/* <Product title="laptop" price={30000} />
    <Product title="mobile" price={10000} />
    <Product title="ring" price={100} />
    <Product title="pen" price={10} /> */}
    <Product title="Dell" description="DDDDDDDDDDDDDDDDDDDDDDDDDDDD" idx={0} />
    <Product title="Boat" description="BBBBBBBBBBBBBBBBBBBBBBBBBBBB" idx={1} />
    <Product title="Noise" description="NNNNNNNNNNNNNNNNNNNNNNNNNNN" idx={2} />
    <Product title="HP" description="HHHHHHHHHHHHHHHHHHHHHHHHHHHHHH" idx={3} />
    </div>
  )
}

export default productGroup
import React from 'react'

const Price = ({oldPrice,newPrice}) => {
    let styles = {
        textDecoration: "line-through"
    }
  return (
    <div>
        <span style={styles}>{oldPrice}</span>
        &nbsp;
        &nbsp;
        &nbsp;
        &nbsp;
        <span>{newPrice}</span>
    </div>
  )
}

export default Price
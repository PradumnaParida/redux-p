import React from 'react'

export default function Home(props) {
    
  return (
    <div>
      <div>
<img src="https://prominencehealth.com/_next/image?url=%2Ficon.png&w=640&q=75" alt="ighh" />
<span>Rs 1000</span>
<button onClick={() => props.addToCartHandler({price: 1000})}>Add to cart</button>
<button onClick={() => props.removeToCartHandler({price: 1000})}>Remove to cart</button>

      </div>
    </div>
  )
}

import React from 'react'
import ProductCard from './ProductCard'

function ProductList({products}) {
  return (
    <>

    <div className='row row-cols-1 row-cols-md-3 g-4'>
        {products.map(product => (
            <ProductCard product = {product} key={product.id}/>
        ))}

    </div>
    
    </>
  )
}

export default ProductList
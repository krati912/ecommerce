import React, { useContext } from 'react'
import {ProductsContext}  from '../ProductsContextProvider'
import { deleteDoc, doc} from "firebase/firestore"
import {db} from "./firebase"

 const Products = () => {

    const  products  = useContext(ProductsContext);

    return (
        <>
            {products.length !== 0 && <h1>Products</h1>}
            <div className='products-container'>
                {console.log(products.length)}
                {products.length === 0 && <div>..no products to display</div>}
                {products.map(product => (
                    <div className='product-card' key={product.ProductID}>
                        <div className='product-img'>
                            <img src={product.ProductImg} alt="not found" />
                        </div>
                        <div className='product-name'>
                            {product.ProductName}
                        </div>
                        <div className='product-price'>
                            Rs {product.ProductPrice}.00
                    </div>
                        <button className='addcart-btn' onClick={async () => await deleteDoc(doc(db,"Products",product.ProductID))}>Delete</button>
                    </div>
                ))}
            </div>
        </>
    )
}
export default Products
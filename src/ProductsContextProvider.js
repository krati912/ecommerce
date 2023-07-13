import { collection, getDocs } from 'firebase/firestore';
import React, { createContext, useEffect, useState } from 'react'
import { db } from './components/firebase'


 export const ProductsContext = createContext();


 const ProductsContextProvider = (props) => {

     const  [ products,setProducts ] = useState([]) 

    useEffect(()=> {
                const l = async () => {
            const docRef = await getDocs(collection(db, "Products"))
            console.log(docRef)
            docRef.forEach(doc => {
                    products.push(
                        
                        {
                        ProductID: doc.id,
                        ProductName: doc.data().ProductName,
                        ProductPrice: doc.data().ProductPrice,
                        ProductImg: doc.data().ProductImg
                    })
                
                setProducts(products)
                return () => setProducts([])
            })
        };
            l();
            
    },[products]
    )
     
        return (
            <ProductsContext.Provider value={ products }>
                {props.children}
            </ProductsContext.Provider>
        )
    }

export default ProductsContextProvider

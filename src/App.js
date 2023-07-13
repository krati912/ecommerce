import { Routes, Route, Navigate, useNavigate } from 'react-router-dom';
import './App.css'
import SignIn from './components/SignIn'
import SignUp from './components/SignUp'
import Home from './components/Home'
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut} from 'firebase/auth'
import { createContext, useEffect, useState } from 'react'
import { auth } from './components/firebase'
import Header from './components/Header';
import Addproduct from './Addproduct';
import Products from './components/Products';
import ProductsContextProvider from './ProductsContextProvider';
import CartContextProvider from './CartContext';

export const UserContext  = createContext()

function App() {
  const [ user, setUser ] = useState({})
  const navigate = useNavigate()

  const createUser = (email, password) => createUserWithEmailAndPassword(auth, email,password)
  const signIn = (email, password) => signInWithEmailAndPassword(auth, email, password)
  const logout = async () => {
    await signOut(auth)
    navigate('/')
  }
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (current) => {
      console.log(current)
      setUser(current)
    });
    return () => unsubscribe()
  })

  return (
    <div className="App">
        <p>
          Commerce App
        </p>
        
        <ProductsContextProvider>
          <CartContextProvider>
        <UserContext.Provider value={{user, createUser, logout, signIn}}>

          <Header/>
          <Routes>
            <Route path='/' element={user?<Home />:<Navigate to="/signin" replace/>} />
            <Route path='/signup' element={<SignUp />} />
            <Route path='/signin' element={<SignIn />} />
            <Route path='/add' element={<Addproduct />} />
            <Route path='/products' element={<Products />} />
          </Routes>
        </UserContext.Provider>
        </CartContextProvider>
        </ProductsContextProvider>
    </div>
  );
}

export default App;

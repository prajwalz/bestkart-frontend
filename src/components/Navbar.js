import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import './Navbar.css'
import { signOut } from './user/userSign'
const Cookie = require('js-cookie')

export default function Navbar() {

    const users = useSelector(state => state.userSign)
    const { userData, loading , error } =  users 

    const cart = useSelector(state => state.cart)
    const { cartItems }  = cart


    useEffect(() => {
        if(userData)
        return () => { 
        }
    }, [userData])


    const dispatch = useDispatch()
    const signOutHandler = () => {
        dispatch(signOut())
    }

    return (
        <>
            <div className="wrapper back-yellow">
                <div className="container nav-con">
                    <Link to='/'>
                    <div className="logo-wrapper">
                        <h1 className="logo">BESTKART</h1>
                    </div>
                    </Link>
                    <div className="nav-items-wrapper">
                        <ul className="nav-items">
                            <Link to='/' className="welcome">
                                <li className="nav-item">
                                    {   userData ? <h2>Welcome, {userData.name}</h2> : null }
                                </li>
                            </Link>
                            {  
                                userData ? <li className="nav-item">
                                <button  className="btn-rev btn-mid" onClick={signOutHandler}>Sign Out</button>
                            </li>
                            :
                            
                            <Link to='/signin'>
                            <li className="nav-item">
                                <button className="btn-rev btn-mid">Sign in</button>
                            </li>
                            </Link>
                            }
                            <Link to='/cart/'>
                            <li className="nav-item cart-notify-wrapper">
                                { !cartItems.length ? <div></div> : <div className="cart-notify"><h3 className="cart-qty">{ cartItems.reduce((a, c) => a + Number(c.qty) , 0 )}</h3></div>}
                                <svg className="cart-icon" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M15.55 13C16.3 13 16.96 12.59 17.3 11.97L20.88 5.48C20.9643 5.32843 21.0075 5.15747 21.0054 4.98406C21.0034 4.81064 20.956 4.64077 20.8681 4.49126C20.7803 4.34175 20.6548 4.21778 20.5043 4.13162C20.3538 4.04546 20.1834 4.00009 20.01 4H5.21L4.27 2H1V4H3L6.6 11.59L5.25 14.03C4.52 15.37 5.48 17 7 17H19V15H7L8.1 13H15.55ZM6.16 6H18.31L15.55 11H8.53L6.16 6ZM7 18C5.9 18 5.01 18.9 5.01 20C5.01 21.1 5.9 22 7 22C8.1 22 9 21.1 9 20C9 18.9 8.1 18 7 18ZM17 18C15.9 18 15.01 18.9 15.01 20C15.01 21.1 15.9 22 17 22C18.1 22 19 21.1 19 20C19 18.9 18.1 18 17 18Z" fill="white"/>
                                </svg>
                                <h2 className="cart-text">Cart</h2>
                            </li>
                            </Link>


                        </ul>
                    </div>
                </div>
            </div>
        </>
    )
}

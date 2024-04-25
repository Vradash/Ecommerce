import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';

function App() {
    return (
        <>
            <section id="header">
                {/*  <a href='#'>logo</a>  */}
                <Link to='/'><img src="images/logo123.png" alt="Unable to load " /></Link>

                <div>
                    <ul id="navbar">
                        <li><NavLink to="/">Home</NavLink></li>
                        <li><NavLink to="/shop">Shop</NavLink></li>
                        <li><NavLink to="/about">About</NavLink></li>
                        <li><NavLink to="/contact">Contact</NavLink></li>
                        <li><NavLink to="/cart"><i className="fa fa-shopping-cart"></i></NavLink></li>
                        {/* <li><NavLink to="/cart"><i className="fa-regular fa-bars"></i></NavLink></li> */}
                    </ul>
                </div>
            </section>
        </>

    )
}

export default App;
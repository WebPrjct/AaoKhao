import React from 'react'

export default function Navbar() {
  return (
    <nav className="navbar">
        <div className="navbar_text">
            <div className="logo"><h2>Aaoo<span>Khao</span>.com</h2></div>
            <ul>
                <li><a href="">Home</a></li>
                <li><a href="">Menu</a></li>
                <li><a href="">Shop</a></li>
                <li><a href="">News</a></li>
                <li><a href="">Contact</a></li>
            </ul>
        </div>
    </nav>
  )
}

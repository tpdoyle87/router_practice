import React from 'react'
import { NavLink } from 'react-router-dom'

const Header = () => (
  <div>
    <h1>Portfolio</h1>
    <div>
      <NavLink exact to="/" activeClassName="active"> Home </NavLink>
      <NavLink exact to="/portfolio" activeClassName="active"> Projects </NavLink>
      <NavLink to="/contact" activeClassName="active"> Contact Me </NavLink>
      <NavLink to="/about" activeClassName="active"> About </NavLink>
    </div>
  </div>
)

export default Header

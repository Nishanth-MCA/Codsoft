import React from 'react'
import { Outlet, Link } from "react-router-dom";
import './Nav.css'
export default function Nav() {
  return (
    <div className=''>
      <nav className="navbar navbar-expand-lg  navbar-dark">
        <div className="container mx-xl-5">
          <a className="navbar-brand" href="#temp">Portfolio Web</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse " id="navbarNav">
            <ul className="navbar-nav ms-auto text-center my-2 my-xl-0" id='navhover'>
              <li className="nav-item px-2 px-xl-2">
                <Link className=" nav-link text-center" to="/Home">Home</Link>
              </li>
              <li className="nav-item px-2 px-xl-2">
                <Link className=" nav-link text-center" to="/Project">Project</Link>
              </li>
              <li className="nav-item px-2 px-xl-2">
                <Link className=" nav-link text-center" to="/About">About</Link>
              </li>
              <li className="nav-item px-2 px-xl-2">
                <Link className=" nav-link text-center" to="/Contact">Contact</Link>              </li>
            </ul>
          </div>
        </div>
      </nav>
      <Outlet/>
    </div>
  )
}
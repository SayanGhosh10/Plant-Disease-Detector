import React, { useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'

export default function Nav() {
  let location = useLocation();
  useEffect(() => {
  }, [location]);
  return (
    <>
      <nav className="navbar navbar-expand-lg" data-bs-theme="dark" style={{ backgroundColor: "#002800", position: "fixed", width: "100%" }}>
        <div className="container-fluid">
          <Link className={`navbar-brand ${location.pathname === "/" ? "active" : ""}`} to="/">Plant Analyzer</Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className={`nav-link ${location.pathname === "/" ? "active" : ""}`} aria-current="page" to="/">Home</Link>
              </li>
              <li className="nav-item">
                <Link className={`nav-link ${location.pathname === "/about" ? "active" : ""}`} aria-current="page" to="/about">About</Link>
              </li>
              {/* <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/">Analyze Plant</Link>
              </li> */}
            </ul>
            {!localStorage.getItem('token') ? <form className='d-flex'>
              <Link className="btn btn-success " role="button" to="/login">Login</Link>
              <Link className="btn btn-success mx-2" role="button" to="/signup">Sign-up</Link>
            </form> : <Link className="btn btn-success " role="button" to="/login" onClick={() => { localStorage.removeItem('token') }}>Logout</Link>}
            {/* <form className="d-flex" role="search" >
              <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" style={{color: "black", backgroundColor : "white"}}/>
              <button className="btn btn-outline-success" type="submit">Search</button>
            </form> */}
          </div>
        </div>
      </nav>
    </>
  );
}
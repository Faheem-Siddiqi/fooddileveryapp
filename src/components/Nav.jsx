import React from "react";
import { Link, Route, Routes } from "react-router-dom";
import { BsFillCartDashFill } from "react-icons/bs";
import "../css/Nav.css";
export default function fna() {
  return (
    <>
      <div className="navParent">
        <nav className="navbar navbar-expand-lg  p-3">
          <div className="container-fluid">
            <h2 className="navbar-brand" style={{ color: "#FD1FA4" }}>
              Pizzaiolo
            </h2>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon" />
            </button>
            <div
              className="collapse navbar-collapse"
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav me-auto m-auto mb-lg-0">
                <li className="nav-item">
                  <Link className="nav-link " aria-current="page" to="">
                    HOME
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link " to="/AboutUs">
                    ABOUT US
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link " to="/ContactUs">
                    CONTACT US
                  </Link>
                </li>
              </ul>
              <div>
              <Link  to="/Cart">
              <BsFillCartDashFill
                style={{ color: "#FD1FA4", fontSize: "24px" }}
                
              /></Link>
              
              </div>
              
            </div>
          </div>
        </nav>
      </div>
    </>
  );
}

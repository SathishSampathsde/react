import React, { Fragment, useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../store/authContext";
import { useDispatch, useSelector } from "react-redux";
import { authActions } from "../../../store/slices/authReducer";

function Navbar() {
  const dispatch = useDispatch();

  function logoutHandler() {
    dispatch(authActions.logout());
  }

  const { isLoggedIn } = useSelector((state) => state);
  return (
    <nav className="navbar navbar-expand-lg bg-dark navbar-dark">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">
          React
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse " id="navbarNav">
          {isLoggedIn && (
            <ul className="navbar-nav ">
              <li className="nav-item">
                <Link className="nav-link" to="/">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/product">
                  Product
                </Link>
              </li>
            </ul>
          )}
          <div className="d-flex gap-3 ms-auto">
            {!isLoggedIn && (
              <Fragment>
                <Link className="btn btn-light" to="/login">
                  Login
                </Link>
                <Link className="btn btn-light" to="/sign-up">
                  Sign Up
                </Link>
              </Fragment>
            )}
            {isLoggedIn && (
              <button className="btn btn-light" onClick={logoutHandler}>
                Logout
              </button>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;

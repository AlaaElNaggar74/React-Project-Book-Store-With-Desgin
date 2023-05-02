import React, { useEffect, useState } from "react";

import { Link, useNavigate } from "react-router-dom";
import "./NavBar.css";

import { auth } from "../../FireBase-Config/Firebase-Config";
import { onAuthStateChanged, signOut } from "firebase/auth";

const NavBar = () => {
  let [user, setUser] = useState("");
  let naviggate = useNavigate();
  // let user=

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user.uid);
      } else {
        setUser(null);
        // console.log("");
      }
    });
  }, [user]);

  let logoutFunc = () => {
    if (user) {
      signOut(auth);
      naviggate("/");
    }
  };
  return (
    <nav className="navbar navbar-expand-lg ">
      <div className="container">
        <Link className="navbar-brand" to="/">
          BookStore
        </Link>
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
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className="nav-link active" aria-current="page" to="/">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/database">
                UseDataBase
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to={!user ? "/LoginPag" : "/"}>
                <button
                  className="btn btn-danger fw-bold"
                  onClick={() => {
                    logoutFunc();
                  }}
                >
                  {user ? "LogOut" : "Login"}
                </button>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;

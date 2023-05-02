import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Login.css";

import { auth, googleProvider } from "../../FireBase-Config/Firebase-Config";
import { signInWithPopup, signInWithEmailAndPassword } from "firebase/auth";

const LoginPag = () => {
  let [email, setEmail] = useState("");
  let [password, setPassword] = useState("");
  let navigate = useNavigate();

  let signInFunctio = async () => {
    try {
      await signInWithEmailAndPassword(auth, email, password);
      navigate("/");
    } catch (error) {
      console.error(error);
    }
  };
  let signInWithGoogle = async () => {
    try {
      await signInWithPopup(auth, googleProvider);
      navigate("/");
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="LoginPag ">
      <div className="conLogin col-md-4">
        <h1 className="text-center">Login</h1>
        <form
          className=" "
          onSubmit={(e) => {
            e.preventDefault();
          }}
        >
          <div className="mb-3 ">
            <label htmlFor="email" className="form-label">
              Email address
            </label>
            <input
              type="email"
              className="form-control"
              id="email"
              placeholder="Enter Your E-mail"
              value={email}
              required
              onChange={(e) => {
                setEmail(e.target.value);
              }}
            />
          </div>
          <div className="mb-3 ">
            <label htmlFor="pass" className="form-label">
              Password
            </label>
            <input
              type="password"
              className="form-control"
              id="pass"
              placeholder="Enter Your Password "
              value={password}
              required
              onChange={(e) => {
                setPassword(e.target.value);
              }}
            />
          </div>
          <div className="mb-2 text-center">
            <button
              className="btn btn-danger mt-3 fw-bold"
              onClick={(e) => {
                signInFunctio();
              }}
            >
              Login
            </button>
          </div>
          <div className="mb-3 text-center ">
            <button
              className="btn btn-danger mt-1 fw-bold"
              onClick={(e) => {
                e.preventDefault();
                navigate("/createpage");
              }}
            >
              Create New E-Mail On LOgin
            </button>
          </div>
          <div className="mb-3 text-center ">
            <button
              className="btn btn-danger mt-1 fw-bold"
              onClick={(e) => {
                signInWithGoogle();
                e.preventDefault();
              }}
            >
              Login With Google
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default LoginPag;

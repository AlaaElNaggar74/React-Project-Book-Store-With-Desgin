import React, { useState } from "react";
import "./CreatPage.css";
import { useNavigate } from "react-router-dom";

import { auth } from "../../FireBase-Config/Firebase-Config";
import { createUserWithEmailAndPassword } from "firebase/auth";
const CreatePage = () => {
  let navigate = useNavigate();

  let [newUserName, setNewUserName] = useState("");
  let [newEmail, setNewEmail] = useState("");
  let [newPassword, setNewPassword] = useState("");

  let createUserFun =async () => {
    if (newUserName !== "" && newEmail !== "" && newPassword !== "") {
      try {
        await createUserWithEmailAndPassword(auth, newEmail, newPassword);
        navigate("/");
      } catch (error) {
        console.error(error);
      }
    }
  };

  return (
    <div className="createpage">
      <div className="concreate col-md-4">
        <h1 className="text-center">Create New Account</h1>
        <form
          className=" "
          onSubmit={(e) => {
            e.preventDefault();
          }}
        >
          <div className="mb-3 ">
            <label htmlFor="nameee" className="form-label">
              Name
            </label>
            <input
              type="text"
              className="form-control"
              id="nameee"
              required
              placeholder="Enter Your E-mail"
              value={newUserName}
              onChange={(e) => {
                setNewUserName(e.target.value);
              }}
            />
          </div>
          <div className="mb-3 ">
            <label htmlFor="emoo" className="form-label">
              Email address
            </label>
            <input
              type="email"
              className="form-control"
              id="emoo"
              required
              placeholder="Enter Your E-mail"
              value={newEmail}
              onChange={(e) => {
                setNewEmail(e.target.value);
              }}
            />
          </div>
          <div className="mb-3 ">
            <label htmlFor="passw" className="form-label">
              Password
            </label>
            <input
              type="password"
              className="form-control"
              id="passw"
              required
              placeholder="Enter Your Password "
              value={newPassword}
              onChange={(e) => {
                setNewPassword(e.target.value);
              }}
            />
          </div>

          <div className="mb-2 text-center">
            <button
              className="btn btn-danger mt-3 fw-bold"
              onClick={(e) => {
                createUserFun();
              }}
            >
              Create
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CreatePage;

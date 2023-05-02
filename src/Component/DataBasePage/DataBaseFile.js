import React, { useEffect, useState } from "react";

import "./Database.css";

import { db } from "../../FireBase-Config/Firebase-Config";

import iamge from "../../Assets/dataBase-1.jpg";

// import { getDoc,addDoc,deleteDoc,updateDoc ,doc,getDocs } from "firebase/firestore";
import {
  getDocs,
  collection,
  addDoc,
  deleteDoc,
  doc,
  updateDoc,
} from "firebase/firestore";

const DataBaseFile = () => {
  let [selectedID, setSelectedid] = useState("");
  let [editshow, setEditeShow] = useState(false);
  let [addButt, setAddButt] = useState(false);

  let [bookList, setBookList] = useState([]);
  let bookCollectionRef = collection(db, "BookStore");

  let [addNewTitle, setAddNewTitle] = useState("");
  let [addNewAuther, setAddNewAuther] = useState("");
  let [addNewRelease, setAddNewRelease] = useState("");

  let [upddateTitle, setUpddatTitle] = useState("");
  let [upddatAuther, setUpddatAuther] = useState("");
  let [upddateRelease, setUpddatRelease] = useState("");
  let getData = async () => {
    try {
      let data = await getDocs(bookCollectionRef);
      let fillterDat = data.docs.map((doc) => ({ ...doc.data(), id: doc.id }));
      setBookList(fillterDat);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  let addNewBook = async () => {
    if (addNewTitle !== "" && addNewAuther !== "" && addNewRelease !== "") {
      try {
        await addDoc(bookCollectionRef, {
          title: addNewTitle,
          auther: addNewAuther,
          release: addNewRelease,
        });
        getData();
        setAddNewTitle("");
        setAddNewAuther("");
        setAddNewRelease("");
      } catch (error) {
        console.log(error);
      }
    }
  };

  let deletBooKFun = async (id) => {
    try {
      await deleteDoc(doc(db, "BookStore", id));
      getData();
    } catch (error) {
      console.error(error);
    }
  };
  let upddBooKFun = async (id) => {
    if (upddateTitle !== "" && upddatAuther !== "" && upddateRelease !== "") {
      try {
        await updateDoc(doc(db, "BookStore", id), {
          title: upddateTitle,
          auther: upddatAuther,
          release: upddateRelease,
        });
        setEditeShow(!editshow);
        getData();
      } catch (error) {
        console.error(error);
      }
    }
  };
  return (
    <div className="DataBaseFile">
      <div className="dtacon ">
        {/* <img src={iamge} alt="sws" className="backGroundImag"/> */}
        <h1 className="hedd text-center mb-5 pt-3">DataBase Function CRUD</h1>
        <div className="text-center mb-3">
          <button
            className="btn btn-danger fw-bold me-2"
            onClick={() => {
              setAddButt(!addButt);
            }}
          >
            {addButt ? "Hide-Field" : "Show-Field-To-Add"}
          </button>
        </div>
        {addButt ? (
          <form
            className="d-flex align-items-end justify-content-center enterDtatForm"
            onSubmit={(e) => {
              e.preventDefault();
            }}
          >
            <div className="mb-3 me-3 ">
              <label htmlFor="exampleFormControlInput1" className="form-label">
                Title
              </label>
              <input
                type="text"
                className="form-control"
                id="exampleFormControlInput1"
                placeholder="Enter Your E-mail"
                required
                value={addNewTitle}
                onChange={(e) => {
                  setAddNewTitle(e.target.value);
                }}
              />
            </div>
            <div className="mb-3 me-4">
              <label htmlFor="exampleFormControlInput1" className="form-label">
                Auther
              </label>
              <input
                type="text"
                className="form-control"
                id="exampleFormControlInput1"
                placeholder="Enter Your Password "
                value={addNewAuther}
                required
                onChange={(e) => {
                  setAddNewAuther(e.target.value);
                }}
              />
            </div>
            <div className="mb-3 me-5">
              <label htmlFor="relea" className="form-label">
                Release
              </label>
              <input
                type="text"
                className="form-control"
                id="relea"
                placeholder="Enter Your book Release "
                value={addNewRelease}
                required
                onChange={(e) => {
                  setAddNewRelease(e.target.value);
                }}
              />
            </div>
            <div className="mb-3 text-center">
              <button
                className="btn btn-danger fw-bold"
                onClick={() => {
                  addNewBook();
                }}
              >
                Submit
              </button>
            </div>
          </form>
        ) : (
          ""
        )}

        <div className="tableOfBooke mt-3">
          <h1 className="databseHead text-center my-4 p-4">
            DataBase Of Books
          </h1>
          <form
            className="d-flex align-items-end justify-content-center tititREMOVbA hedderOfTable"
            onSubmit={(e) => {
              e.preventDefault();
            }}
          >
            <div className=" me-3 w-25">
              <label htmlFor="relass" className="form-label ps-3 tititREMOVbA">
                Title
              </label>
            </div>
            <div className=" me-4 w-25">
              <label htmlFor="trrrr" className="form-label">
                Auther
              </label>
            </div>
            <div className=" me-5 w-25">
              <label htmlFor="reltwo" className="form-label">
                Release
              </label>
            </div>
            <div className=" me-5 w-25 text-end">
              <label htmlFor="reltwo" className="form-label">
                Options
              </label>
            </div>
          </form>
          {bookList.map((ele) => (
            <div key={ele.id}>
              <form
                className="d-flex align-items-end justify-content-center customeFont lastTowInput"
                onSubmit={(e) => {
                  e.preventDefault();
                }}
              >
                <div className=" me-3 w-25">
                  <label htmlFor="relass" className="form-label tititREMOVbA">
                    {ele.title}
                  </label>
                </div>
                <div className=" me-4 w-25">
                  <label htmlFor="trrrr" className="form-label">
                    {ele.auther}
                  </label>
                </div>
                <div className=" me-5 w-25">
                  <label htmlFor="reltwo" className="form-label">
                    {ele.release}
                  </label>
                </div>
                <div className="text-center d-flex">
                  <button
                    className="btn btn-danger fw-bold me-2"
                    onClick={() => {
                      setEditeShow(!editshow);
                      setSelectedid(ele.id);

                      setUpddatTitle(ele.title);
                      setUpddatAuther(ele.auther);
                      setUpddatRelease(ele.release);
                    }}
                  >
                    Edite
                  </button>
                  <button
                    className="btn btn-danger fw-bold "
                    onClick={() => {
                      deletBooKFun(ele.id);
                    }}
                  >
                    Delete
                  </button>
                </div>
              </form>
              {editshow && ele.id === selectedID ? (
                <form
                  className="d-flex align-items-end justify-content-center  lastTowInput"
                  onSubmit={(e) => {
                    e.preventDefault();
                  }}
                >
                  <div className=" me-3 ">
                    <input
                      type="text"
                      className="form-control"
                      id="exampleFormControlInput1"
                      placeholder="Enter Your E-mail"
                      value={upddateTitle}
                      required
                      onChange={(e) => {
                        setUpddatTitle(e.target.value);
                      }}
                    />
                  </div>
                  <div className=" me-4">
                    <input
                      type="text"
                      className="form-control"
                      id="exampleFormControlInput1"
                      placeholder="Enter Your book Release "
                      value={upddatAuther}
                      required
                      onChange={(e) => {
                        setUpddatAuther(e.target.value);
                      }}
                    />
                  </div>
                  <div className=" me-5">
                    <input
                      type="text"
                      className="form-control"
                      id="exampleFormControlInput1"
                      placeholder="Enter Your book Release "
                      value={upddateRelease}
                      required
                      onChange={(e) => {
                        setUpddatRelease(e.target.value);
                      }}
                    />
                  </div>
                  <div className="text-center d-flex">
                    <button
                      className="btn btn-danger fw-bold me-2"
                      onClick={(e) => {
                    

                        upddBooKFun(ele.id);
                      }}
                    >
                      Update
                    </button>
                  </div>
                </form>
              ) : (
                ""
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default DataBaseFile;

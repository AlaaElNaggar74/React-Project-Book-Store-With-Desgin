import "./App.css";
import { Routes, Route } from "react-router-dom";
import HomePage from "./Component/HomePage/HomePage";
import NavBar from "./Component/NavBar/NavBar";
import DataBaseFile from "./Component/DataBasePage/DataBaseFile";
import LoginPag from "./Component/LoginPahe/LoginPag";
import CreatePage from "./Component/CreatePage/CreatePage";

function App() {
  return (
    <div className="App">
      <NavBar />
    
      <Routes>
        <Route
          path="/"
          element={
            <>
              <HomePage />
            </>
          }
        />
        <Route
          path="/database"
          element={
            <>
              <DataBaseFile />
            </>
          }
        />
        <Route
          path="/LoginPag"
          element={
            <>
              <LoginPag />
            </>
          }
        />
        <Route
          path="/createpage"
          element={
            <>
              <CreatePage />
            </>
          }
        />
      </Routes>
    </div>
  );
}

export default App;

import { Fragment } from "react";
import "./App.scss";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Show from "./Show";
import Vocabulary from "./domain/pages/Vocabulary/Vocabulary";
import Register from "./domain/pages/Register/Register";
import Login from "./domain/pages/Login/Login";

function App() {
  return (
    <Fragment>
      <Router>
        <Routes>
          <Route path="/" element={<Show />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/vocabulary" element={<Vocabulary />} />
        </Routes>
      </Router>
    </Fragment>
  );
}

export default App;

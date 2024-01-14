import { useState } from "react";
import "./App.css";
import axios from "axios";
import Todo from "./Components/Todo";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Update from "./Components/Update";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" exact element={<Todo/>}/>
          <Route path="/todos/update/:id" element={<Update />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;

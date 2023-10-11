


import "./App.css";
import React, { useState, useEffect } from 'react';
import SearchPage from "./component/SearchPage";
import Login from "./component/Login";
import Dashboard from "./component/Dashboard";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {

  const [studentData, setStudentData] = useState(null);

  const handleChildData = (data) => {
    setStudentData(data);
  };

  const handleSearch=()=>{
    let id = studentData.id;
      return studentData.find(item => item.id === id);

  }

  useEffect(() => {
    console.log(studentData);
  }, [studentData]);

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/" element={<SearchPage  id={studentData ? studentData.id : null}  searchFun={handleSearch}/>} />
          <Route path="/dashboard" element={<Dashboard  data={studentData}  onChildData={handleChildData} />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;


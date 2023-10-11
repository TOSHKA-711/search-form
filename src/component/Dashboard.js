

import React, { useState } from "react";
import "./Dashboard.css";
import { FiUploadCloud } from "react-icons/fi";

function Dashboard({ onChildData }) {
  const [formData, setFormData] = useState({
    studentName: "",
    studentCode: "",
    studentCollege: "",
    image: null,
  });

  const [studentData, setStudentData] = useState([]); // Array to store student data

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();


    const newStudent = {
      id: formData.studentCode, // Unique ID
      ...formData, // Existing form data
    };

    // Update the studentData array with the new object
    setStudentData([...studentData, newStudent]);

    // Pass the new object to a parent component using onChildData
    onChildData(newStudent);

    // Clear the form fields
    setFormData({
      studentName: "",
      studentCode: "",
      studentCollege: "",
      image: null,
    });
  };

  return (
    <div className="login">
      <div className="login-wrap">
        <h1>Upload Image</h1>
        <label className="cssbuttons-io-button" htmlFor="input-file">
          <FiUploadCloud />
          <span>Upload</span>
        </label>

        <input
          type="file"
          accept="image/*"
          id="input-file"
          // onChange={handleImageUpload}
        />
        <input
          placeholder="اسم الطالب"
          name="studentName"
          type="text"
          onChange={handleChange}
          value={formData.studentName}
        />
        <input
          placeholder="كود الطالب"
          name="studentCode"
          type="text"
          onChange={handleChange}
          value={formData.studentCode}
        />
        <input
          placeholder="مؤهل الطالب"
          name="studentCollege"
          type="text"
          onChange={handleChange}
          value={formData.studentCollege}
        />
        <input
          value="submit"
          className="btn"
          type="submit"
          onClick={handleSubmit}
          id="form-submit"
        />
      </div>
    </div>
  );
}

export default Dashboard;


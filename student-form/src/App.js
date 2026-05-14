import React, { useState } from "react";

function App() {

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    course: "",
    mobile: "",
  });

  const [message, setMessage] = useState("");

  // Page Style
  const pageStyle = {
    height: "100vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    background: "linear-gradient(135deg, #74ebd5, #ACB6E5)",
    fontFamily: "Arial, sans-serif",
  };

  // Form Container
  const formStyle = {
    backgroundColor: "white",
    padding: "40px",
    borderRadius: "20px",
    width: "400px",
    boxShadow: "0 10px 30px rgba(0,0,0,0.2)",
    display: "flex",
    flexDirection: "column",
    gap: "18px",
  };

  // Heading Style
  const headingStyle = {
    textAlign: "center",
    color: "#2c3e50",
    marginBottom: "10px",
    fontSize: "28px",
  };

  // Label Style
  const labelStyle = {
    fontSize: "14px",
    fontWeight: "bold",
    color: "#444",
    marginBottom: "5px",
  };

  // Input Style
  const inputStyle = {
    width: "100%",
    padding: "12px",
    border: "1px solid #ccc",
    borderRadius: "10px",
    fontSize: "15px",
    outline: "none",
    boxSizing: "border-box",
    transition: "0.3s",
    backgroundColor: "#f9f9f9",
  };

  // Button Style
  const buttonStyle = {
    width: "100%",
    padding: "14px",
    background: "linear-gradient(to right, #007bff, #0056b3)",
    color: "white",
    border: "none",
    borderRadius: "10px",
    cursor: "pointer",
    fontSize: "17px",
    fontWeight: "bold",
    letterSpacing: "1px",
  };

  // Message Style
  const messageStyle = {
    textAlign: "center",
    color: "green",
    fontWeight: "bold",
    fontSize: "15px",
  };

  // Handle Input Change
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  // Handle Submit
  const handleSubmit = (e) => {
    e.preventDefault();

    if (
      formData.name === "" ||
      formData.email === "" ||
      formData.password === "" ||
      formData.course === "" ||
      formData.mobile === ""
    ) {
      setMessage("Please fill all fields!");
    } else {
      setMessage("Student Registered Successfully!");

      setFormData({
        name: "",
        email: "",
        password: "",
        course: "",
        mobile: "",
      });
    }
  };

  return (
    <div style={pageStyle}>

      <form style={formStyle} onSubmit={handleSubmit}>

        <h2 style={headingStyle}>
          Student Registration Form
        </h2>

        <div>
          <label style={labelStyle}>Student Name</label>

          <input
            type="text"
            name="name"
            placeholder="Enter your name"
            value={formData.name}
            onChange={handleChange}
            style={inputStyle}
          />
        </div>

        <div>
          <label style={labelStyle}>Email Address</label>

          <input
            type="email"
            name="email"
            placeholder="Enter your email"
            value={formData.email}
            onChange={handleChange}
            style={inputStyle}
          />
        </div>

        <div>
          <label style={labelStyle}>Password</label>

          <input
            type="password"
            name="password"
            placeholder="Enter password"
            value={formData.password}
            onChange={handleChange}
            style={inputStyle}
          />
        </div>

        <div>
          <label style={labelStyle}>Course</label>

          <input
            type="text"
            name="course"
            placeholder="Enter course name"
            value={formData.course}
            onChange={handleChange}
            style={inputStyle}
          />
        </div>

        <div>
          <label style={labelStyle}>Mobile Number</label>

          <input
            type="tel"
            name="mobile"
            placeholder="Enter mobile number"
            value={formData.mobile}
            onChange={handleChange}
            style={inputStyle}
          />
        </div>

        <button type="submit" style={buttonStyle}>
          Register Now
        </button>

        <p style={messageStyle}>
          {message}
        </p>

      </form>

    </div>
  );
}

export default App;
import React, { useState } from "react";
import axios from "axios"; // Import axios
import toast from "react-hot-toast";
import { useNavigate } from "react-router";
const Signup = () => {
  const [input, setInput] = useState({});
  const navigate = useNavigate();
  const handleInput = (e) => {
    let name = e.target.name;
    let value = e.target.value;
    setInput((values) => ({ ...values, [name]: value }));
  };

  const handleSubmit = async () => {
    try {
      const response = await axios.post("http://localhost:8000/user/signup", input);
      console.log(response.data);
      if (response.data) {
        toast.success("Signup Successfully");
        navigate("/login");
      }
      localStorage.setItem("Users", JSON.stringify(response.data.user));
    } catch (err) {
      if (err.response) {
        console.error(err.response.data);
        toast.error("Error: " + err.response.data.message);
      }
    }
  };

  return (
    <>
      <div className="login-container">
        <div className="input-group">
          <label>Name</label>
          <input
            type="text"
            placeholder="Enter your fullname"
            name="fullname"
            value={input.fullname || ""}
            onChange={handleInput}
            className="input"
          />
        </div>
        <br />
        <div className="input-group">
          <label>Email</label>
          <input
            type="email"
            placeholder="Enter your email"
            name="email"
            value={input.email || ""}
            onChange={handleInput}
            className="input"
          />
        </div>
        <br />
        <div className="input-group">
          <label>Password</label>
          <input
            type="password"
            placeholder="Enter your password"
            name="password"
            value={input.password || ""}
            onChange={handleInput}
            className="input"
          />
        </div>
        <br />
        <div className="button-group">
          <button onClick={handleSubmit} className="button">
            Signup
          </button>
        </div>
        <br />
      </div>
    </>
  );
};

export default Signup;

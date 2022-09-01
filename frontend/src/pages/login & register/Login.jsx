import React from "react";
import { useState } from "react";

function Login({ user, setUser }) {
  const [field, setField] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    setField((preValue) => {
      return {
        ...preValue,
        [name]: value,
      };
    });
  };

  function loginData() {
    const data = {
      email: field.email,
      password: field.password,
    };

    fetch("http://localhost:8000/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    }).then((res) => {
      console.log(res);
      setUser("userId");
    });

    setField({
      email: "",
      password: "",
    });

    setTimeout(() => {
      alert("You Logged in Successfully");
    }, 500);
  }

  return (
    <div className="p-2">
      <form>
        <div className="mb-3">
          <label for="exampleInputEmail1" className="form-label">
            Email
          </label>
          <input
            type="email"
            name="email"
            value={field.email}
            onChange={handleChange}
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            placeholder="Enter Your Email"
            required
          />
        </div>

        <div className="mb-3">
          <label for="exampleInputPassword1" className="form-label">
            Password
          </label>
          <input
            type="password"
            name="password"
            value={field.password}
            onChange={handleChange}
            className="form-control"
            id="exampleInputPassword1"
            placeholder="Enter Your Password"
            required
          />
        </div>

        <center>
          <button type="submit" className="btn btn-primary" onClick={loginData}>
            Login
          </button>
        </center>
      </form>
    </div>
  );
}

export default Login;

import React from "react";
import { useState } from "react";

function Register() {
  const [field, setField] = useState({
    name: "",
    email: "",
    phone: "",
    password: "",
    check: "",
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

  function submitData(e) {
    e.preventDefault();

    const data = {
      name: field.name,
      email: field.email,
      phone: field.phone,
      password: field.password,
    };

    fetch("http://localhost:8000/register", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    }).then((res) => {
      return res.json();
    });

    setField({
      name: "",
      email: "",
      phone: "",
      password: "",
      check: "",
    });

    setTimeout(() => {
      alert("Registered Successfully");
    }, 500);
  }

  return (
    <div className="p-2">
      <form onSubmit={submitData}>
        <div className="mb-3">
          <label for="exampleInputEmail1" className="form-label">
            Enter Your Name
          </label>
          <input
            type="text"
            name="name"
            value={field.name}
            onChange={handleChange}
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            required
          />
        </div>
        <div className="mb-3">
          <label for="exampleInputEmail1" className="form-label">
            Enter Your Email
          </label>
          <input
            type="email"
            name="email"
            value={field.email}
            onChange={handleChange}
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            required
          />
          <div id="emailHelp" className="form-text">
            We'll never share your email with anyone else.
          </div>
        </div>
        <div className="mb-3">
          <label for="exampleInputPassword1" className="form-label">
            Enter Your Phone
          </label>
          <input
            type="number"
            name="phone"
            value={field.phone}
            onChange={handleChange}
            pattern={`${[0-9][10]}`}
            className="form-control"
            id="exampleInputPassword1"
            required
          />
        </div>
        <div className="mb-3">
          <label for="exampleInputPassword1" className="form-label">
            Enter Password
          </label>
          <input
            type="password"
            name="password"
            value={field.password}
            onChange={handleChange}
            className="form-control"
            id="exampleInputPassword1"
            required
          />
        </div>
        <div className="mb-3 form-check">
          <input
            type="checkbox"
            className="form-check-input"
            id="exampleCheck1"
            required
          />
          <label className="form-check-label" for="exampleCheck1" name="check">
            I agree to the Terms and Conditions.
          </label>
        </div>
        <center>
          <button type="submit" className="btn btn-primary">
            Register
          </button>
        </center>
      </form>
    </div>
  );
}

export default Register;

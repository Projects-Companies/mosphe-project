import React from "react";
import { useState } from "react";

function Addcategory() {
  const [category, setCategory] = useState({
    name: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    setCategory((preValue) => {
      return {
        ...preValue,
        [name]: value,
      };
    });
  };

  const submitData = (event) => {
    event.preventDefault();

    const data = {
      c_name: category.name,
    };

    fetch("http://localhost:8000/category/", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    })
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        console.log(data);
      });

    setCategory({
      name: "",
    });

    setTimeout(() => {
      alert("Category Added");
    }, 500);
  };

  return (
    <div className="p-5">
      <form onSubmit={submitData}>
        <div className="p-5">
          <div class="row">
            <div class="col">
              <input
                type="text"
                name="name"
                class="form-control"
                value={category.name}
                onChange={handleChange}
                placeholder="Category name"
                aria-label="Last name"
                required
              />
            </div>
            <div className="p-5">
              <button type="submit" className="btn btn-primary">
                Submit
              </button>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
}

export default Addcategory;

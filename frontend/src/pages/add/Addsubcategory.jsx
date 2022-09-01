import React, { useState } from "react";

function Addsubcategory() {
  const [fullName, setFullName] = useState({
    names: "",
    price: "",
  });

  async function fetching() {
    const res = await fetch("http://localhost:8000/sub_category");
    const print = await res.json();
  }

  const inputEvent = (e) => {
    let value = e.target.value;
    const name = e.target.name;

    setFullName((pre) => {
      return {
        ...pre,
        [name]: value,
      };
    });
  };


  function submitData(e) {
    e.preventDefault();

    const data = {
      s_name: fullName.names,
      s_price: fullName.price,
    };

    fetch("http://localhost:8000/sub_category", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    }).then((res) => {
      return res.json();
    });

    fetching();

    setFullName({
      names: "",
      price: "",
    });

    setTimeout(() => {
        alert("Sub_category Added")
    }, 500);
  }

  return (
    <div>
      <form onSubmit={submitData}>
        <div className="p-5">
          <div class="row">
            <div class="col">
              <input
                type="text"
                name="names"
                class="form-control"
                value={fullName.names}
                onChange={inputEvent}
                placeholder="Product name"
                aria-label="Last name"
                required
              />
            </div>
            <div class="col">
              <input
                type="text"
                name="price"
                class="form-control"
                value={fullName.price}
                onChange={inputEvent} 
                placeholder="Product Price"
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

export default Addsubcategory;

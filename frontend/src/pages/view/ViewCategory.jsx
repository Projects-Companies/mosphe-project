import React, { useState, useEffect } from "react";
import DataTable from "react-data-table-component";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

function ViewCategory() {
  const [categoryData, setCategoryData] = useState([]);
  const [search, setSearch] = useState("");
  const [filteredCategoryData, setFilteredCategoryData] = useState([]);
  const [c_name, setC_name] = useState("");
  const [c_id, setC_id] = useState("");

  {
    /* MODAL  */
  }

  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  function submitData(c_name, c_id) {
    setC_name(c_name);
    setC_id(c_id);
    handleShow();
  }

  // UPDATE

  const updateCategory = async () => {
    let data1 = { c_name };

    let res = await fetch(`http://localhost:8000/category/${c_id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data1),
    });

    let Data = res.json();
    setC_name(Data.Response);

    handleClose();
    getCategoryData()
  };

  // GET API
  const getCategoryData = async () => {
    try {
      const response = await fetch("http://localhost:8000/category/", {
        method: "GET",
      });
      const datas = await response.json();
      setCategoryData(datas.Response);
      setFilteredCategoryData(datas.Response);
      console.log(datas);
    } catch (err) {
      console.log(err);
    }
  };

  // DELETE API
  const deleteFun = (c_id) => {
    fetch(`http://localhost:8000/category/${c_id}`, { method: "DELETE" })
      .then((res) => {
        return res.text();
      })
      .then((data) => {
        alert("deleted");
        console.log(data);
        getCategoryData();
      });
  };

  const columns = [
    {
      name: "Category Id",
      selector: (datas) => datas.c_id,
      sortable: true,
    },
    {
      name: "Category Name",
      selector: (datas) => datas.c_name,
    },
    {
      name: "Edit",
      cell: (datas) => (
        <button
          className="btn btn-primary"
          onClick={() => {
            submitData(datas.c_name, datas.c_id);
          }}
        >
          Edit
        </button>
      ),
    },
    {
      name: "Delete",
      cell: (datas) => (
        <button
          className="btn btn-danger"
          onClick={() => deleteFun(datas.c_id)}
        >
          Delete
        </button>
      ),
    },
  ];

  useEffect(() => {
    getCategoryData();
  }, []);

  useEffect(() => {
    const result = categoryData.filter((category) => {
      return category.c_name.toLowerCase().match(search.toLowerCase());
    });

    setFilteredCategoryData(result);
  }, [search]);

  return (
    <div>
      <DataTable
        title="Category List"
        columns={columns}
        data={filteredCategoryData}
        pagination
        fixedHeader
        fixedHeaderScrollHeight="400px"
        selectabledatass
        selectabledatassHighlight
        highlightOnHover
        subHeader
        subHeaderComponent={
          <input
            type="search"
            placeholder="Search here"
            className="w-25 form-control"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        }
        selectabledatassVisibleOnly
      />

      {/* MODAL  */}

      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Update Category</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <form>
            <div className="p-5">
              <div class="row">
                <div class="col">
                  <input
                    type="text"
                    name="name"
                    value={c_name}
                    onChange={(e) => setC_name(e.target.value)}
                    class="form-control"
                    // value={subCategory.name}
                    // onChange={handleChange}
                    placeholder="Category name"
                    aria-label="Last name"
                    required
                  />
                </div>
              </div>
            </div>
          </form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={updateCategory}>
            Update
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}

export default ViewCategory;

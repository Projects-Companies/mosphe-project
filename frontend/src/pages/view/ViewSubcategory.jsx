import React, { useState, useEffect } from "react";
import DataTable from "react-data-table-component";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

function ViewSubcategory() {
  const [subCategoryData, setSubcategoryData] = useState([]);
  const [search, setSearch] = useState("");
  const [filteredSubcategoryData, setFilteredsubCategoryData] = useState([]);
  const [s_name, setS_name] = useState("");
  const [s_id, setS_id] = useState("");
  const [s_price, setS_price] = useState("");

  {
    /* MODAL  */
  }
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  function submitData(s_name, s_price, s_id) {
    setS_name(s_name);
    setS_id(s_id);
    setS_price(s_price);
    handleShow();
  }

  // GET API

  const getSubcategoryData = async () => {
    try {
      const response = await fetch("http://localhost:8000/sub_category/", {
        method: "GET",
      });
      const datas = await response.json();
      setSubcategoryData(datas.Response);
      setFilteredsubCategoryData(datas.Response);
      console.log(datas);
    } catch (err) {
      console.log(err);
    }
  };

  // POST API

  const updateSubcategory = async () => {
    let data1 = { s_name, s_price };

    let res = await fetch(`http://localhost:8000/sub_category/${s_id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data1),
    });

    let Data = res.json();
    setS_name(Data.Response);
    setS_price(Data.Response);

    handleClose();
    getSubcategoryData();
  };

  // DELETE API
  const deleteFun = (s_id) => {
    fetch(`http://localhost:8000/sub_category/${s_id}`, { method: "DELETE" })
      .then((res) => {
        return res.text();
      })
      .then((data) => {
        alert("deleted");
        console.log(data);
        getSubcategoryData();
      });
  };

  const columns = [
    {
      name: "Subcategory Id",
      selector: (datas) => datas.s_id,
      sortable: true,
    },
    {
      name: "Subcategory Name",
      selector: (datas) => datas.s_name,
    },
    {
      name: "Subcategory price",
      selector: (datas) => datas.s_price,
    },
    {
      name: "Edit",
      cell: (datas) => (
        <button
          className="btn btn-primary"
          onClick={() => {
            submitData(datas.s_name, datas.s_price, datas.s_id);
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
          onClick={() => deleteFun(datas.s_id)}
        >
          Delete
        </button>
      ),
    },
  ];

  useEffect(() => {
    getSubcategoryData();
  }, []);

  useEffect(() => {
    const result = subCategoryData.filter((subCategory) => {
      return subCategory.s_name.toLowerCase().match(search.toLowerCase());
    });

    setFilteredsubCategoryData(result);
  }, [search]);

  return (
    <div>
      <DataTable
        title="Subcategory List"
        columns={columns}
        data={filteredSubcategoryData}
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
          <Modal.Title>Update Sub_Category</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <form>
            <div className="p-5">
              <div class="row">
                <div class="col">
                  <input
                    type="text"
                    name="name"
                    class="form-control"
                    value={s_name}
                    onChange={(e) => setS_name(e.target.value)}
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
                    value={s_price}
                    onChange={(e) => setS_price(e.target.value)}
                    placeholder="Product Price"
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
          <Button variant="primary" onClick={updateSubcategory}>
            Update
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}

export default ViewSubcategory;

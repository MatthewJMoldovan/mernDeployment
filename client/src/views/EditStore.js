import { useParams, useNavigate, Link } from "react-router-dom"
import { useState, useEffect } from "react";
import axios from "axios";

export const EditStore = (props) =>{
const { id } = useParams();
const navigate = useNavigate();

const [name, setName] = useState("");
const [number, setNumber] = useState("");
const [open, setOpen] = useState(false);
const [validationErrors, setValidationErrors] = useState(null);


useEffect(() => {
  axios
    .get(`http://localhost:8000/api/stores/${id}`)
    .then((res) => {
      const { name,number,open } = res.data
      
      setName(name)
      setNumber(number)
      setOpen(open)
      console.log(res.data);
    })
    .catch((error) => {
      console.log(error);
    });
}, [id]);


const handleEditSubmit = (event) => {
  event.preventDefault();
  const editedStore = {name, number, open};

  axios
  .put(`http://localhost:8000/api/stores/${id}`, editedStore)
  .then((res) => {
    console.log(res.data);
    navigate(`/store/${id}`)
  })
  .catch((error) => {
    console.log(error);
    setValidationErrors(error?.response?.data?.errors);
  });
  };

  return (
    <div>
    <div className="w-50 p-4 rounded mx-auto shadow mt-4">
      <h3 className="text-center">Add an Store!</h3>
      <form
        onSubmit={(event) => {
          handleEditSubmit(event);
        }}
      >
        <div className="formGroup">
          <label>Name</label>
          {validationErrors?.name && (
            <span className="text-danger ms-1">
              - {validationErrors.name.message}
            </span>
          )}
          <input
            type="text"
            className="form-control"
            value={name}
            onChange={(event) => {
              setName(event.target.value);
            }}
          />
          <label>Store Number</label>
          {validationErrors?.number && (
            <span className="text-danger ms-1">
              - {validationErrors.number.message}
            </span>
          )}
          <input
            type="text"
            className="form-control"
            value={number}
            onChange={(event) => {
              setNumber(event.target.value);
            }}
          />
          <div className="form-check">
          <label className="form-check-label">Open?</label>
          {validationErrors?.open && (
            <span className="text-danger ms-1">
              - {validationErrors.open.message}
            </span>
          )}
          <input
            type="checkbox"
            className="form-check-input"
            checked={open}
            onChange={(event) => {
              setOpen(event.target.checked);
            }}
          />
          </div>
        </div>
        <button className="btn btn-outline-primary me-1 mt-2">Submit</button>
        <Link to={"/"} className="btn btn-outline-danger mx-1 mt-2">
          Cancel
        </Link>
      </form>
    </div>
  </div>
  )
}
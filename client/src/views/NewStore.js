import axios from "axios";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

export const NewStore = (props) => {
  const [name, setName] = useState("");
  const [number, setNumber] = useState("");
  const [open, setOpen] = useState(false);
  const [validationErrors, setValidationErrors] = useState(null);

  const navigate = useNavigate();

  const handleNewStoreSubmit = (event) => {
    event.preventDefault();
    const newStore = { name, number, open };

    axios
      .post("http://localhost:8000/api/stores", newStore)
      .then((res) => {
        console.log(res.data);
        navigate("/");
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
            handleNewStoreSubmit(event);
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
  );
};

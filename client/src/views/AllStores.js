import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export const AllStores = (props) => {
  const [stores, setStores] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:8000/api/stores")
      .then((res) => {
        setStores(res.data);
        console.log(res.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const handleDeleteClick = (idToDelete) => {
    axios
      .delete(`http://localhost:8000/api/stores/${idToDelete}`)
      .then((res) => {
        const filteredStores = stores.filter((store) => {
          const isStoreToDelete = idToDelete === store._id;

          if (isStoreToDelete) {
            return false;
          }
          return true;
        });

        setStores(filteredStores);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className="w-75 p-4 mx-auto">
      <div className="shadow mb-4 rounded border p-4 text-center">
        <table className="table">
          <thead>
            <tr>
              <th scope="col">Store</th>
              <th scope="col">Store Number</th>
              <th scope="col">Open</th>
              <th scope="col">Remove</th>
            </tr>
          </thead>
          {stores.map((store, i) => {
            const { _id, name, number, open } = store;
            return (
              <tbody>
                <tr key={i}>
                  <td className="align-middle fs-4">
                    <Link to={`/store/${_id}`}>{name}</Link>
                  </td>
                  <td>{number}</td>
                  {open && <td>Open</td>}
                  {open && (
                    <td>
                      <button
                        onClick={(event) => {
                          handleDeleteClick(_id);
                        }}
                        className="btn btn-outline-danger mx-1"
                      >
                        Delete
                      </button>
                    </td>
                  )}
                  {!open && <td>Closed</td>}
                </tr>
              </tbody>
            );
          })}
        </table>
        <Link to="/store/new" className="btn btn-success mx-1">
            Add a new Store
          </Link>
      </div>
    </div>
  );
};

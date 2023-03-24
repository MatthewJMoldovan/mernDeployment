import { useParams, Link } from "react-router-dom"
import { useState, useEffect } from "react";
import axios from "axios";

export const OneStore = (props) =>{
  const { id } = useParams();


  const [store, setStore] = useState(null);

  useEffect(() => {
    axios
      .get(`http://localhost:8000/api/stores/${id}`)
      .then((res) => {
        setStore(res.data);
        console.log(res.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [id]);

  if (store === null) {
    return <h1>Loading...Pleast Wait!</h1>;
  }

const { name, number, open } = store;

  return (
    <div className="w-75 p-4 mx-auto">
      <div className="shadow mb-4 rounded border p-4 text-start">
        <h2 className="fs-1">{name}</h2>
        <p className="fs-4">Store Number: {number}</p>
        {open && <p className="fs-4">Store is open</p>}
        {!open && <p className="fs-4">Store is closed</p>}
        <Link
          to={`/store/${id}/edit`}
          className="btn btn-warning"
        >
          Edit Store
        </Link>
      </div>
    </div>
  )
}
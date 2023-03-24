import { Link, Route, Routes } from "react-router-dom";
import { AllStores } from "./views/AllStores";
import { OneStore } from "./views/OneStore";
import { EditStore } from "./views/EditStore";
import { NewStore } from "./views/NewStore";

function App() {
  return (
    <div className="container">
      <nav className="navbar navbar-expand-lg navbar-light bg-light sticky-top justify-content-between mb-4 px-4 rounded border">
        <h1 className="navbar-brand mb-0 fs-1">Store Finder</h1>
        <div className="navbar-nav">
          <Link to="/" className="btn btn-primary mx-1">
            Home
          </Link>
        </div>
      </nav>




      <Routes>
        <Route path="/" element={<AllStores/>}/>
        <Route path="/store/new" element={<NewStore/>}/>
        <Route path="/store/:id" element={<OneStore/>}/>
        <Route path="/store/:id/edit" element={<EditStore/>}/>
      </Routes>
    </div>
  );
}

export default App;

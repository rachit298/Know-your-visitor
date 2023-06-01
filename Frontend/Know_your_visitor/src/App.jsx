import Create from "../Components/Create/Create";
import Error from "../Components/Error/Error";
import Navbar from "../Components/Navbar/Navbar";
import Read from "../Components/Read/Read";
import Update from "../Components/Update/Update";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route exact path="/" element={<Create />} />
          <Route exact path="/all" element={<Read />} />
          <Route exact path="/update" element={<Update />} />
          <Route exact path="/*" element={<Error />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;

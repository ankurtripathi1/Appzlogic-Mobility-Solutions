import EditUserAdd from "./Component/EditUserAdd";
import Home from "./Component/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/edit-user/:id" element={<EditUserAdd />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;

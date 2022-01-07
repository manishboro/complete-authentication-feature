import { Routes, Route } from "react-router-dom";

import Login from "./pages/Login";
import Error from "./pages/NotFound";
import Register from "./pages/Register";

function App() {
  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="*" element={<Error />} />
    </Routes>
  );
}

export default App;

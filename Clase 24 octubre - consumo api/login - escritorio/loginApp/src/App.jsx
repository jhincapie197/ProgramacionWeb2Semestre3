import Login from "./pages/login";
import Register from "./pages/register";
import Dashboard from "./pages/dashboard";
import { Routes, Route } from "react-router-dom";
import { useState } from "react";
import { Navigate } from "react-router-dom";

function App() {
  let [isAuthorized, setIsAuthorized] = useState(false);

  let handleLogin = ()=>{
    setIsAuthorized(true);
  };


  return (
    <>
      <Routes>
        <Route path="/Login" element={isAuthorized ? <Navigate to="/Dashboard" /> : <Login onLogin={handleLogin} />} />
        <Route path="/Register" element={isAuthorized ? <Navigate to="/Dashboard" /> : <Register onLogin={handleLogin} />} />
        <Route path="/Dashboard" element={isAuthorized ? <Dashboard /> : <Navigate to="/Login" />} />
        <Route path="*" element={<Login onLogin={handleLogin} />} />
      </Routes>
    </>
  );
}

export default App

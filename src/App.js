import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import MemberList from "./pages/MemberList";
import MemberAdd from "./pages/MemberAdd";
import MemberView from "./pages/MemberView";
import MemberEdit from "./pages/MemberEdit";

function App() {
  return (
      <BrowserRouter>
        <Routes>
          <Route exact path="/"  element={<Home/>} />
          <Route path="/list"  element={<MemberList/>} />
          <Route path="/add"  element={<MemberAdd/>} />
          <Route path="/edit/:id"  element={<MemberEdit/>} />
          <Route path="/view/:id"  element={<MemberView/>} />
        </Routes>
      </BrowserRouter>
  );
}

export default App;

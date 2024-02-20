import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import MemberList from "./pages/MemberList";
import MemberAdd from "./pages/MemberAdd";
import MemberDetail from "./pages/MemberDetail";

function App() {
  return (
      <BrowserRouter>
        <Routes>
          <Route exact path="/"  element={<Home/>} />
          <Route path="/members"  element={<MemberList/>} />
          <Route path="/add"  element={<MemberAdd/>} />
          <Route path="/members/v1/:id"  element={<MemberDetail/>} />
        </Routes>
      </BrowserRouter>
  );
}

export default App;

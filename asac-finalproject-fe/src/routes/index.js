import React from "react";
import { Routes, Route } from "react-router-dom";
import Login from "../components/Auth/login";
import Homepage from "../components/Homepage/homepage";

function RouteComponent() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Homepage />}></Route>
        <Route path="/login" element={<Login />}></Route>
      </Routes>
    </>
  );
}
export default RouteComponent;

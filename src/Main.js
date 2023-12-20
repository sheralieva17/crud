import React from "react";
import { Route, Routes } from "react-router-dom";
import ListComponent from "./components/ListComponent";
import CreateComponent from "./components/CreateComponent";
import ReadComponent from "./components/ReadComponent";
import UpdateComponent from "./components/UpdateComponent";

const Main = () => {
  return (
    <Routes>
      <Route path="/lists" element={<ListComponent />} />
      <Route path="/create" element={<CreateComponent />} />
      <Route path="/read/:id" element={<ReadComponent />} />
      <Route path="/update/:id" element={<UpdateComponent />} />
    </Routes>
  );
};

export default Main;

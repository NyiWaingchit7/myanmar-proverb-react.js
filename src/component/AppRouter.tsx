import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Proverbs from "./Proverbs";
import App from "../App";

const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" Component={App} />

        <Route path="/alphabets/:id" Component={Proverbs} />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRouter;

import React from "react";
import { Outlet } from "react-router-dom";
import MainNavigation from "../component/MainNavigation";

const Root = () => {
  return (
    <>
      <MainNavigation />
      <main>
        <Outlet />
      </main>
    </>
  );
};

export default Root;

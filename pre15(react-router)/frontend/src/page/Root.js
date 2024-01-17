import React from "react";
import MainNavigation from "../components/MainNavigation";
import { Outlet, useLoaderData, useNavigation } from "react-router-dom";

const Root = () => {
  //   const navigation = useNavigation();

  /* navigation.state === '' */
  return (
    <>
      <MainNavigation />
      <main>
        {/* {navigation.state === "loading" && <p>Loading...</p>} */}
        <Outlet />
      </main>
    </>
  );
};

export default Root;

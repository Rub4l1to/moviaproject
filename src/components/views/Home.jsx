import { navigate } from "hookrouter";
import React, { useEffect } from "react";

import { Header } from "../";
import { getItemLS } from "../../hooks/LocalStorage";

const Home = () => {
  if (!getItemLS("user")) {
    navigate("/");
  }

  return (
    <div>
      <Header {...{ simple: false }} />
      Home
    </div>
  );
};

export default Home;

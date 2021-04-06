import React, { Fragment, useEffect, useState } from "react";

// Imports
import { useRoutes } from "hookrouter";

// Components
import { NotFound, Auth, Home, Search, Header } from "./components";

// Api
import { getFilms } from "./hooks/Api";
import { loadFilms } from "./hooks/Films";

const App = () => {
  const [login, setLogin] = useState(false);
  const [films, setFilms] = useState([]);

  useEffect(() => {
    // Load films
    getData();
  }, []);

  const routes = {
    "/": () => <Auth {...{ setLogin }} />,
    "/auth*": () => <Auth {...{ setLogin }} />,
    "/home": () => <Home {...{ setLogin, films}} />,
    "/search/:param":  ({ param })  => <Home {...{ setLogin, films, param}} />,
  };

  const routeResult = useRoutes(routes);

  const getData = async () => {
    const { data: { results } } = await getFilms();
    const omdb = await loadFilms(results);
    setFilms(omdb);
  };

  return (
    <Fragment>
      {routeResult && <Header {...{ simple: login }} />}
      {routeResult || <NotFound />}
    </Fragment>
  );
};
export default App;
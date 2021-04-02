import React, { Fragment, useState } from "react";

// Imports
import { useRoutes } from "hookrouter";

// Components
import { NotFound, Auth, Home, Search, Header } from "./components";

const App = () => {
  const [login, setLogin] = useState(false);

  const routes = {
    "/": () => <Auth {...{ setLogin }} />,
    "/auth*": () => <Auth {...{ setLogin }} />,
    "/home": () => <Home {...{ setLogin }} />,
    "/search": () => <Search {...{ setLogin }} />,
    // '/products/:id': ({ id }) => <ProductDetails id={id} />
  };
  const routeResult = useRoutes(routes);

  return (
    <Fragment>
      <Header {...{ login }} />
      {routeResult || <NotFound />}
      {/* {login && <Footer />} */}
    </Fragment>
  );
};
export default App;

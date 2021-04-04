import React from "react";

import { A } from "hookrouter";

const NotFound = () => (
  <section className="notFound">
    <div className="content ">
      <h2>404</h2>
      <h4>Page not found</h4>
      <p>
        The page you're looking for doesn't exist. You may mistyped the address
        or the page may have moved.
      </p>
      <A href="/" className="btn btn--transparent">
        Back to home
      </A>
    </div>
  </section>
);

export default NotFound;

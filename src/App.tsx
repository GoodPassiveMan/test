import LoadingOrError from "components/LoadingOrError";
import React, { lazy, ReactElement, Suspense, useEffect } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

const Gallery = lazy(() => import("pages/Gallery"));
const Details = lazy(() => import("pages/Details"));

export default function App(): ReactElement {
  useEffect(() => {
    navigator.serviceWorker.ready
      .then((r) => {
        console.log(r);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);
  return (
    <BrowserRouter>
      <Suspense fallback={<LoadingOrError />}>
        <Switch>
          <Route exact path="/" component={Gallery} />
          <Route path="/:fruitName" component={Details} />
        </Switch>
      </Suspense>
    </BrowserRouter>
  );
}

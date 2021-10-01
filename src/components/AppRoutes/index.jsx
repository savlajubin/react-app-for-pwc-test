import React from "react";
import { Switch, Route } from "react-router-dom";

import UserList from "../UserList";

const routeUrl = {
  index: "/",
  error: "/error"
};

const AppRoutes = () => {
  return (
    <>
      <Switch>
        <Route exact path={routeUrl.index} component={UserList} />
      </Switch>
    </>
  );
};

export default AppRoutes;

import * as React from "react";

const Users = React.lazy(() => import("./Users"))
const SingleUser = React.lazy(() => import("./SingleUser"))
const CreateUser = React.lazy(() => import("./CreateUser"))

export { Users, SingleUser, CreateUser }
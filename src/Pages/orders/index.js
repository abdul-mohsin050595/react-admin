import * as React from "react";

const Orders = React.lazy(() => import("./Orders"))
const OrderDetail = React.lazy(() => import("./OrderDetail"))

export {Orders,OrderDetail}
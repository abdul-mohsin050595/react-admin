// import * as React from "react";
import React,{lazy} from "react"

const Categories = React.lazy(() => import("./Categories"))
const CatProduct = React.lazy(() => import("./CatProduct"))
const CategoryDetail = React.lazy(() => import("./CategoryDetail"))

export {Categories,CatProduct,CategoryDetail}
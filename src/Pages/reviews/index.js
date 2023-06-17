import * as React from "react"

const Reviews = React.lazy(() => import( "./Reviews"))
const UpdateReview = React.lazy(() => import( "./UpdateReview"))

export {Reviews,UpdateReview}
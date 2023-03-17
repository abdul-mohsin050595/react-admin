import { combineReducers } from "redux";
import {
    themeReducer,
    userReducer, orderReducer,
    productReducer,
    userDetailReducer,
    productDetailReducer,
    createUserReducer,
    updateUserReducer,
    deleteUserReducer,
    orderDetailReducer,
    updateOrderReducer,
    deleteOrderReducer,
    createProductReducer,
    reviewReducer,
    categoryReducer,
    categoryProductReducer,
    categoryDetailReducer,
    updateCategoryReducer,
    singleReviewReducer
} from "./Reducers"

export const rootReducer = combineReducers({
    theme: themeReducer,
    users: userReducer,
    user: userDetailReducer,
    createdUser: createUserReducer,
    updatedUser: updateUserReducer,
    deletedUser: deleteUserReducer,
    orders: orderReducer,
    order: orderDetailReducer,
    updatedOrder: updateOrderReducer,
    deletedOrder : deleteOrderReducer,
    products: productReducer,
    product: productDetailReducer,
    createdProduct : createProductReducer,
    categories : categoryReducer,
    catProducts : categoryProductReducer,
    category : categoryDetailReducer,
    updatedCat: updateCategoryReducer,
    reviews : reviewReducer,
    review :singleReviewReducer
})
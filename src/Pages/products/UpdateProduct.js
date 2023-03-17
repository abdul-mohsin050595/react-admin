import React, { useEffect } from 'react';
import ProductForm from './ProductForm';
import { useSelector,useDispatch } from 'react-redux';
import {useParams,useNavigate} from "react-router-dom";
import { deleteProduct, productById ,updateProduct} from '../../Redux/Actions/productAction';

function UpdateProduct() {
    const {productId} = useParams()
    const navigate = useNavigate()
    const { product, loading } = useSelector(state => state.product)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(productById(productId))
    },[dispatch,productId])

    const handleUpdateProduct = (nextProduct) => {
        const {title,description,price,stock,image_url,category,brand} = nextProduct
        dispatch(updateProduct({
            title,description,price,stock,image_url,category,brand,
        },productId))
        navigate(-1)

    }

    const deleteProductData = () => {
        dispatch(deleteProduct(productId))
        navigate(-1)
    }

    return (
        <section>
            {
                loading ? (
                    <h1>loading....</h1>
                ) : (
                    <ProductForm productData={product} submitData={handleUpdateProduct}/>
                )
            }
            <div>
                <button onClick={deleteProductData}>Delete</button>
            </div>
        </section>
    )
}

export default UpdateProduct
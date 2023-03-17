import React from 'react';
import { useNavigate } from 'react-router-dom';

function ProductTable({ products }) {
    const navigate = useNavigate()

    const navigateProductPage = (id) => {
        navigate(`/products/${id}`)
    }

    return (
        <table className='products_table'>
            <thead>
                <tr>
                    <td><input type="checkbox" /></td>
                    <td>ProductId</td>
                    <td>Name</td>
                    <td>Stock</td>
                    <td>Price</td>
                    <td>Category</td>
                </tr>
            </thead>
            <tbody>
                {
                    products.map(product => {
                        return (
                            <tr key={product.id} onClick={() =>navigateProductPage(product.id)}>
                                <td><input type="checkbox" /></td>
                                <td>{product.id}</td>
                                <td>{product.title}</td>
                                <td>{product.stock}</td>
                                <td>{product.price}</td>
                                <td>{product.category}</td>
                            </tr>
                        )
                    })
                }
            </tbody>
        </table>
    )
}

export default ProductTable
import React, { useState } from 'react'

function ProductForm({ productData,submitData }) {
    const [product, setProduct] = useState(productData)

    const handleChange = (e) => {
        setProduct({
            ...product,
            [e.target.name] : e.target.value
        })
    }
    return (
        <div className='product_form'>
            <div className='product_name'>
                <input
                    placeholder='product title'
                    name='title'
                    value={product.title}
                    onChange={handleChange}
                />
            </div>
            <div className='product_description'>
                <textarea
                    placeholder=" description"
                    className='description_input'
                    name='description'
                    value={product.description}
                    onChange={handleChange}
                >
                </textarea>
            </div>
            <div className='product_stoke_price'>
                <input placeholder='stoke'
                    type="number"
                    name='stock'
                    value={product.stock}
                    onChange={handleChange}
                />
                <input
                    placeholder="Price"
                    type="number"
                    name='price'
                    value={product.price}
                    onChange={handleChange}
                />
                <input
                    placeholder="discount Percentage"
                    type="number"
                    name='discountPercentage'
                    value={product.discountPercentage}
                    onChange={handleChange}
                />
            </div >
            <div className="product_category">
                <input placeholder='category'
                    name='category'
                    value={product.category}
                    onChange={handleChange}
                />
                <input placeholder='brand'
                name='brand'
                value={product.brand}
                onChange={handleChange}
                />
            </div>
            <div className='product_image'>
                <input
                    placeholder=' image URL'
                    type="url"
                    name='image_url'
                    value={product.image_url}
                    onChange={handleChange}
                />
                {/* <label>
                    <input type="file" />
                </label > */}
            </div>
            <div className='product_submit_btn'>
                <button
                    onClick={() => submitData(product)}
                >
                    Save
                </button>
            </div>
        </div>
    )
}

export default ProductForm
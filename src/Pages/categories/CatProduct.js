import React from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

function CatProduct() {
    const { catProducts, loading } = useSelector(state => state.catProducts)
    const navigate = useNavigate()

    const navigateToUpdate = (id) => {
        navigate(`/products/${id}`)
    }
    if (loading) {
        return (
            <section>
                <h1>Loading...</h1>
            </section>
        )
    } else if (catProducts.length === 0) {
        return <section>No Products Available</section>
    }
    return (
        <section>
            <div className='cards'>
                {
                    catProducts.map(products => {
                        console.log(products)
                        return (
                            <div key={products.id}
                                className='card'
                                onClick={() => navigateToUpdate(products.id)}
                            >
                                <div className='card_img_div'>
                                    <img className='card_img'
                                        src={products.image_url}
                                        alt={products.title}
                                    />
                                </div>
                                <div className='card_body'>
                                    <p>{products.title}</p>
                                    <strong>${products.price}</strong>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        </section>
    )
}

export default CatProduct
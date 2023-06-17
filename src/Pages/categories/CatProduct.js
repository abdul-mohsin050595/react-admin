import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { Loading } from '../../Components';
import { getProductsByCategory } from '../../Redux/Actions/categoryAction';

function CatProduct() {
    const { catProducts, loading,error } = useSelector(state => state.catProducts)
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const [searchParams,setSearchParams] = useSearchParams()
    
    const navigateToUpdate = (id) => {
        navigate(`/products/${id}`)
    }
    
    useEffect(() => {
        dispatch(getProductsByCategory(searchParams.get("filter")))
    }, [ dispatch,searchParams])

    if (loading) return <Loading /> 
    if (catProducts.length === 0) return <section>No Products Available</section>
    if(error) return <section>{error}</section>
    return (
        <section>
            <div className='cards'>
                {
                    catProducts.map(products => {
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
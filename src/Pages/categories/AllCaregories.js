import React, { useEffect } from 'react';
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { getCategories, getProductsByCategory} from "../../Redux/Actions/categoryAction";

function AllCaregories() {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const { categories, loading, error } = useSelector(state => state.categories)

    const categoryProductHandler = (category) => {
        dispatch(getProductsByCategory(category))
        navigate("/categories/products")
    }

    const categoryDetailHandler = (id) => {
        navigate(`/categories/${id}`)
    }

    useEffect(() => {
        dispatch(getCategories())
    }, [dispatch])

    return (
        loading ? (
            <h1> Loading</h1 >
        ) : (
            <div  >
                <div className='cards'>
                    {
                        categories.map(category => {
                            return (
                                <div key={category.id} className='card'>
                                    <div className='card_img_div'>
                                        <img
                                            className='card_img'
                                            src={category.image}
                                            alt={category.name}
                                        />
                                    </div>
                                    <p>{category.name}</p>
                                    <div className='cards_btns'>
                                        <button
                                            className="product_btn"
                                            onClick={() => categoryProductHandler(category.name)}
                                        >
                                            product
                                        </button>
                                        <button
                                            className="edit_btn"
                                            onClick={
                                                () => categoryDetailHandler(category.id)
                                            }
                                        >
                                            Edit
                                        </button>
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        )
    )
}

export default AllCaregories
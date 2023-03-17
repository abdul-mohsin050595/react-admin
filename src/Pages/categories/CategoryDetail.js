import React, { useEffect, useState } from 'react';
import { useSelector,useDispatch } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import { getCategoryDetail ,updateCategory} from '../../Redux/Actions/categoryAction';
import CatProductList from './CatProductList';

function CategoryDetail() {
    const { categoryId } = useParams();
    const dispatch = useDispatch();
    const { category ,loading} = useSelector(state => state.category);
    const [cat,setCat] = useState({name : category.name,image :category.image});
    const navigate = useNavigate()

    useEffect(() => {
        dispatch(getCategoryDetail(categoryId))
    },[dispatch,categoryId])

    const categoryHandler = (e) => {
        setCat({...cat,[e.target.name] : e.target.value})
    }

    const updateCategoryDetail = (category,id) => {
        dispatch(updateCategory(category,id))
        navigate(-1)
    }
    return (
        <section>
            {
                loading ? (
                    <h1>Loading...</h1>
                ) : (
                    <div>
                        <div>
                            <label htmlFor="catName">
                                Category
                                <input
                                    id="catName"
                                    name='name'
                                    value={cat.name}
                                    onChange={categoryHandler}
                                />
                            </label>
                            <label htmlFor="catImage">
                                Category image
                                <input
                                    id="catImage"
                                    name="image"
                                    value={cat.image}
                                    onChange={categoryHandler}
                                />
                            </label>
                        </div>
                        <div>
                            <h4>Products</h4>
                        <CatProductList categoryName={category.name}/>
                        </div>
                        <div>
                            <button onClick={() => updateCategoryDetail(cat,category.id)}>Save</button>
                            <button>Delete</button>
                        </div>
                    </div>
                )
            }
        </section>
    )
}

export default CategoryDetail
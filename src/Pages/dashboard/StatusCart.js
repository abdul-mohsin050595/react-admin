import React from 'react';
import { MdShoppingCart } from "react-icons/md";
import { AiFillShopping } from "react-icons/ai";
import { FiUsers } from "react-icons/fi";
import {TbCurrencyDollar} from "react-icons/tb"
import { IconContext } from "react-icons";

import { Link } from 'react-router-dom';

function StatusCart({ items }) {
    const { orders, products, users } = items
    const totalAmount = orders && orders.reduce((total, cur) => total += cur.total, 0)
    return (
        <div className='status_carts'>
            <Link className='status_cart' to="/products">
                <div className='status_cart_icon'>
                    <IconContext.Provider value={{ className: "dashboard_Icon" }}>
                        <AiFillShopping />
                    </IconContext.Provider>
                </div>
                <div className='status_cart_info'>
                    <p>{products && products.length}</p>
                    <p>Products</p>
                </div>
            </Link>
            <Link className='status_cart' to="/orders">
                <div className='status_cart_icon'>
                    <IconContext.Provider value={{ className: "dashboard_Icon" }}>
                        <MdShoppingCart />
                    </IconContext.Provider>
                </div>
                <div className='status_cart_info'>
                    <h4>{orders && orders.length}</h4>
                    <span>Orders</span>
                </div>
            </Link>
            <Link className='status_cart'>
                <div className='status_cart_icon'>
                    <IconContext.Provider value={{ className: "dashboard_Icon" }}>
                        <TbCurrencyDollar />
                    </IconContext.Provider>
                </div>
                <div className='status_cart_info'>
                    <h4>{Math.floor(totalAmount)}</h4>
                    <span>Income</span>
                </div>
            </Link>
            <Link className='status_cart' to="/customers">
                <div className='status_cart_icon'>
                    <IconContext.Provider value={{ className: "dashboard_Icon" }}>
                        <FiUsers />
                    </IconContext.Provider>
                </div>
                <div className='status_cart_info'>
                    <h4>{users && users.length}</h4>
                    <span>Customers</span>
                </div>
            </Link>
        </div>
    )
}

export default StatusCart
import { MdDashboard, MdShoppingCart, MdBookmark, MdComment } from "react-icons/md"
import { AiFillShopping } from "react-icons/ai"
import { FiUsers } from "react-icons/fi"
import { IconContext } from "react-icons";
import "../CSS/icon.css"

export const sidebars = [
    {
        name: "Dashboard",
        route: "/",
        icon: (<IconContext.Provider value={{ className: "icons" }}>
            <MdDashboard />
        </IconContext.Provider>)
    },
    {
        name: "Orders",
        route: "/orders",
        icon: (<IconContext.Provider value={{ className: "icons" }}>
            <MdShoppingCart />
        </IconContext.Provider>)
    },
    {
        name: "Products",
        route: "/products",
        icon: (<IconContext.Provider value={{ className: "icons" }}>
            <AiFillShopping />
        </IconContext.Provider>)
    },
    {
        name: "Categories",
        route: "/categories",
        icon: (<IconContext.Provider value={{ className: "icons" }}>
            <MdBookmark />
        </IconContext.Provider>)
    },
    {
        name: "Customers",
        route: "/customers",
        icon: (<IconContext.Provider value={{ className: "icons" }}>
            <FiUsers />
        </IconContext.Provider>)
    },
    {
        name: "Reviews",
        route: "/reviews",
        icon: (<IconContext.Provider value={{ className: "icons" }}>
            <MdComment />
        </IconContext.Provider>)
    }
]
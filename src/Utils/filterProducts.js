
export const searchProduct = (products, search) => {
    // search products login
    return products.filter(product => {
        if (search === "") {
            return product
        } else {
            return product.title.toLowerCase().includes(search.toLowerCase()) ||
             product.description.toLowerCase().includes(search.toLowerCase()) ||
             product.category.toLowerCase().includes(search.toLowerCase()) ||
             product.brand.toLowerCase().includes(search.toLowerCase())
        }
    })

}
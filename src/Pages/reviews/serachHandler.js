
export const searchHandler = (reviews,search) => {
    return reviews.filter(review => {
        if(search === ""){
            return review
        }else{
            return review.user.name.toLowerCase().includes(search.toLowerCase())
        }
    })
}
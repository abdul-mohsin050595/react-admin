
export const filterUsers = (users, keyword) => {
    return users.filter(item => {
        if (keyword === "") {
            return item
        } else {
            return item.name.toLowerCase().includes(keyword.toLowerCase()) ||
                item.email.toLowerCase().includes(keyword.toLowerCase()) ||
                item.phone.includes(keyword.toLowerCase()) ||
                item.created_at.toLowerCase().includes(keyword.toLowerCase())
        }
    })
}
    const initialState = {
    news: [],
    categoryList: [],
    selectedCategory: 'TOP'
}

const newsReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'SETNEWS':
            return {...state, news: action.payload}
        case 'SETCATEGORYLIST':
            return {...state, categoryList: action.payload}
        case 'SETSELECTEDCATEGORY':
            return {...state, selectedCategory: action.payload}
        default:
            return state
    }
}

export default newsReducer
import axios from "axios"

export const setNews = (payload) => {
    return {
        type: 'SETNEWS',
        payload
    }
}

export const setCategoryList = (payload) => {
    return {
        type: 'SETCATEGORYLIST',
        payload
    }
}

export const setSelectedCategory = (payload) => {
    return {
        type: 'SETSELECTEDCATEGORY',
        payload
    }
}

export const fetchNews = () => (dispatch) => {
    axios({
        url:'/',
        method: 'GET'
    })
    .then(res => {
        dispatch(setNews(res.data.result.categories))
        dispatch(setCategoryList(res.data.result.categoryList))
    })
    .catch(err => {
        console.log(err)
    })
}
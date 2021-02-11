import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { fetchNews, setSelectedCategory } from "../redux/actions/newsAction"

const CategoryList = ({setToggleList}) => {
  const dispatch = useDispatch()
  const categoryList = useSelector(state => state.categoryList)

  useEffect(() => {
    dispatch(fetchNews())
  }, [dispatch])

  const handleCategorySelect = (categoryName) => {
    console.log(categoryName)
    dispatch(setSelectedCategory(categoryName))
    setToggleList()
  }
  return (
    <div className="container category-list-popup">
      <div className="bg-dark text-white row wid d-flex justify-content-center">
        {
          categoryList?.map(category => (
          <div onClick={() => handleCategorySelect(category.name)} className="category col-md-2">
              {category.name}
          </div>
          ))
        }
      </div>
    </div>
  )

}
export default CategoryList
import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { fetchNews } from "../redux/actions/newsAction"
import CategoryList from './CategoryList'

const Categories = () => {
  const dispatch = useDispatch()
  const [categoryPick, setCategryPick] = useState('Top')
  const categoryList = useSelector(state => state.categoryList)
  const [toggleList, setToggleList] = useState(false)
  useEffect(() => {
    dispatch(fetchNews())
  }, [dispatch])
  const toggleListHandle = () => {
    setToggleList(!toggleList)
  }
  const handleCategoryChange = (e) => {
    
  }
  return (
    <>
    <div className="container-">
      <div className="container-category">
        <ul className="list-category ">
          {
            categoryList.map(category => (
              <li>{category.name}</li>
            ))
          }
        </ul>
        <div className="dropdown-list" onClick={() => toggleListHandle()}>
          <i class="fas fa-chevron-circle-down"></i>
        </div>
      </div>
    </div>
    {
      toggleList ?
      <CategoryList setToggleList={setToggleList}></CategoryList>
      :
      ''
    }
    </>
  )
}
export default Categories
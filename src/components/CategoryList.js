import { useEffect} from "react"
import { useDispatch, useSelector } from "react-redux"
import { fetchNews} from "../redux/actions/newsAction"
import { useHistory, NavLink} from 'react-router-dom'

const CategoryList = ({setToggleList}) => {
  const dispatch = useDispatch()
  const history = useHistory()
  const categoryList = useSelector(state => state.categoryList)

  useEffect(() => {
    dispatch(fetchNews())
  }, [dispatch])

  const handleCategorySelect = (categoryName) => {
    history.push(`/${categoryName}`)
    setToggleList()
  }
  return (
    <div className="category-list-popup">
      {
        categoryList?.map(category => (
        <NavLink 
        to={`/${category.name}`}
        activeClassName="selected"
        >
        <div onClick={() => handleCategorySelect(category.name)}key={category.id} className="category">
            {category.name}
        </div>
        </NavLink>
        ))
      }
    </div>
  )

}
export default CategoryList
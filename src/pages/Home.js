import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import Categories from "../components/Categories"
import { fetchNews } from "../redux/actions/newsAction"

const Home = () => {
  const dispatch = useDispatch()
  const news = useSelector(state => state)
  const selectedCategory = useSelector(state => state.selectedCategory)
  useEffect(() => {
    dispatch(fetchNews())
  }, [dispatch])


  if(news.length === 0) {
    return (
      <p>loading</p>
    )
  } else {
    return (
      <div 
      className="container-fluid"
      style ={{
        minHeight: '100vh'
      }}
      >
        <Categories></Categories>
        <p>{selectedCategory}</p>
      </div>
      )
  }
}

export default Home
import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { fetchNews } from "../redux/actions/newsAction"
import ArticlesContainer from "../components/ArticlesContainer"
import {useParams} from 'react-router-dom'
import Navbar from "../components/Navbar"
import Loading from "../assets/loading.gif"
import CategoryList from '../components/CategoryList'
const Home = () => {
  const dispatch = useDispatch()
  const news = useSelector(state => state.news)
  const selected = useParams().category
  const [toggleList, setToggleList] = useState(false)
  const [article, setArticle] = useState([])
  useEffect(() => {
    dispatch(fetchNews())
  }, [dispatch, selected])
  useEffect(() => {
    let filter = news.filter(el => {
      return el.name === selected
    })
    if(filter.length > 0) {
      let article = filter[0].templates.filter(el => {
        return el.title
      })
      setArticle(article)
    } 
  }, [news])
  const hideToggleList = () => {
    setToggleList(false)
  }
  const handleToggleList = () => {
    setToggleList(!toggleList)
  }
  if(news.length === 0) {
    return (
      <div 
      className="d-flex justify-content-center align-items-center" 
      style={{
        height: '100vh'
      }}>
        <img src={Loading} alt="loading"></img>
      </div>
    )
  } else {
    return (
      <div 
      className="container home-container"
      >
        <Navbar handleToggleList={handleToggleList}></Navbar>
        {
          toggleList ?
          <CategoryList setToggleList={setToggleList}></CategoryList>
          :
          ''
        }
        <div onClick={hideToggleList} className="container main-container">
          <div>
            {
              news.length > 0 ?
              article.map(el => (
                <div className="section-news" key={el.id}>
                  <h4>{el.title}</h4>
                  <div className="row d-flex justify-content-evenly">
                    <ArticlesContainer articles={el.sections[0].articles}></ArticlesContainer>
                  </div>
                </div>
              ))
              :
              ""
            }
          </div>
        </div>
      </div>
      )
  }
}

export default Home
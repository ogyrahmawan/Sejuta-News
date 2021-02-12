import NewsCard from "./NewsCard"

const ArticlesContainer = ({articles}) => {
  return (
    articles ?
    articles.map(article => (
      <div key={article.id} className="col-md-6 col-sm-12">
        <NewsCard article={article}></NewsCard>
      </div>
    ))                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      
    :
    ""
  )
}

export default ArticlesContainer
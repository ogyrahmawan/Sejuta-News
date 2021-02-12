const NewsCard = ({article}) => {  

  return (
    article.title ?
    <div className="article-thumbnail">
      <a href={article.url.url}>
        <img 
        className="card-img-top" 
        src={"https://obs.line-scdn.net/0ha4TZYe4yPhtpIyhZJpdBTFB1PXRaTy0YDRVvBTlNYCxFEH1IVhFyKEglZisUEnlFBxB3f0pmYX5DE35FAEc/w1200"} 
        alt={article.id}
        />
      </a>
      <p >{article.title}</p>
    </div>
    :
    ""
  )
}
export default NewsCard
import {useEffect,useState} from 'react'
import { getArticles } from './api';
import {Link} from 'react-router-dom';

const Articles = () => {
    const [articleList, setArticleList] = useState([])
    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
        setIsLoading(true)
        getArticles()
        .then((data) => {
            setArticleList(data)
            setIsLoading(false)
        })
    },[])

   if(isLoading) {
    return <p className='Loading'>Loading...</p>;
   }


    return (
        <article className="article-list">
            <h2>Here are all available articles</h2>
            <h3>Total articles: {articleList.length}</h3>
            <ul>
                {articleList.map((article) => {
                    return <li key={article.article_id}><Link to={`/article/${article.title}`} >{article.title}</Link> <p>Topic: {article.topic}</p></li>
                })}
            </ul>

        </article>



    )

}

export default Articles;
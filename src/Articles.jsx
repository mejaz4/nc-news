import {useEffect,useState} from 'react'
import { getArticles } from './api';
import {Link} from 'react-router-dom';

const Articles = () => {
    const [articleList, setArticleList] = useState([])

    useEffect(() => {
        getArticles()
        .then((data) => {
            setArticleList(data)
        })
    },[])

    console.log(articleList)
    return (
        <div className="article-list">
            <h2>Here are all available articles</h2>
            <h2>Total articles: {articleList.length}</h2>
            <ul>
                {articleList.map((article) => {
                    return <li key={article.article_id}><Link to={`/article/${article.title}`} >{article.title}</Link> <p>Topic: {article.topic}</p></li>
                })}
            </ul>

        </div>



    )

}

export default Articles;
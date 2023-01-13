import {useEffect,useState} from 'react'
import { useParams } from 'react-router-dom';
import { getArticles } from './api';
import {Link} from 'react-router-dom';

const Articles = () => {
    const [articleList, setArticleList] = useState([])
    const [isLoading, setIsLoading] = useState(true)
    const {topic_name}  = useParams();

    console.log(topic_name, "topic name")

    useEffect(() => {
        setIsLoading(true)
        getArticles(topic_name)
        .then((data) => {
            setArticleList(data)
            setIsLoading(false)
        })
    },[])

   if(isLoading) {
    return <p className='Loading'>Loading...</p>;
   }


    return (
        <div className="article-list">
            <h2>Here are all available articles</h2>
            <h3>Total articles: {articleList.length}</h3>
            <ul>
                {articleList.map((article) => {
                    return <li key={article.article_id}><Link to={`/articles/${article.article_id}`} >{article.title}</Link> <p>Topic: {article.topic}</p></li>
                })}
            </ul>

        </div>



    )

}

export default Articles;
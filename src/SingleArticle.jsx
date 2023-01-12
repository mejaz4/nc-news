import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getSingleArticle } from './api';
import Comments from './Comments';

const SingleArticle = () => {
    const { article_id } = useParams();
    const [singleArticle, setSingleArticle] = useState({});
    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
        setIsLoading(true)
        getSingleArticle(article_id).then((articleData) => {
            setSingleArticle(articleData);
            setIsLoading(false)
        });
    }, [article_id]);


    if (isLoading) {
        return <p className='Loading'>Loading...</p>;
    }

    
    return (
        <div>
            <article>
                <header>
                    <h2>Article: {singleArticle.title}</h2>
                </header>

                <p>{singleArticle.body}</p>
                <p>Written by: {singleArticle.author} <span>
                    | Topic: {singleArticle.topic} </span></p>
            </article>
            <Comments article_id={article_id} />
        </div>
    );
};

export default SingleArticle;
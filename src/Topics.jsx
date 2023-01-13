import {useEffect,useState} from 'react'
import { getTopics } from './api';
import {Link} from 'react-router-dom';

const Topics = () => {
    const [topicList, setTopicList] = useState([])
    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
        setIsLoading(true)
        getTopics()
        .then((data) => {
            setTopicList(data)
            setIsLoading(false)
        })
    },[])

    if(isLoading) {
        return <p className='Loading'>Loading...</p>;
       }

    return (
        <div className="topic-list">
            <h2>Choose a topic from following:</h2>
            <ul>
                {topicList.map((topic) => {
                    return <li key={topic.article_id}><Link to={`/topics/${topic.slug}`} >{topic.slug}</Link> 
                    <p>Description: {topic.description}</p>
                    </li>
                })}
            </ul>

        </div>



    )

}

export default Topics;
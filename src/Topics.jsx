import {useEffect,useState} from 'react'
import { getTopics } from './api';
import {Link} from 'react-router-dom';

const Topics = () => {
    const [topicList, setTopicList] = useState([])

    useEffect(() => {
        getTopics()
        .then((data) => {
            setTopicList(data)
        })
    },[])

    console.log(topicList)
    return (
        <div className="topic-list">
            <h2>Choose a topic from following:</h2>
            <ul>
                {topicList.map((topic) => {
                    return <li key={topic.article_id}><Link to={`/topic/${topic.title}`} >{topic.slug}</Link> 
                    <p>Description: {topic.description}</p>
                    </li>
                })}
            </ul>

        </div>



    )

}

export default Topics;
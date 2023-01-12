import { useEffect, useState } from "react";
import { getComments } from './api';
import CommentAdder from "./CommentAdder";
const Comments = ({article_id}) => {
    const [comments, setComments] = useState([])
    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
        setIsLoading(true)
        getComments(article_id)
            .then((commentsFromApi) => {
                setComments(commentsFromApi)
                setIsLoading(false)
            })
    }, [])

    if (isLoading) {
        return <p className='Loading'>Loading comments...</p>;
    }
if(comments.length !== 0) {
 return (
        <section>
            <h2>Comments</h2>
            <CommentAdder setComments={setComments} article_id={article_id}/>
            <ul className="Comments_list">
                {comments.map((comment) => {
                    return (
                        <li className="comment_list_items" key={comment.comment_id}>
                            <p>{comment.body}</p>
                            <p>Author: {comment.author}</p>
                            <button>
                                {comment.votes}
                                <span aria-label="votes for this comment">👍🏽</span>
                            </button>

                        </li>
                    )
                })}
            </ul>
        </section>
    )
} else {
    return (
       <h3>No comments found</h3> 
    )
    
}

   
}

export default Comments;
import { useState } from "react";
import { postComment } from "./api";

const CommentAdder = ({ setComments, article_id }) => {
    const [newComment, setNewComment] = useState('')

    const handleSubmit = (e) => {
    e.preventDefault();
    alert('Posting comment...')
        setComments((currComments) => {
            return [{body: newComment}, ...currComments]
        })
        setNewComment('')

    postComment(article_id, newComment).then(() =>{
        alert('Your comment has been posted!');
    }).catch((err) => {
        alert('Network too slow!');
        setComments((currComments) => {
            return [...currComments].shift()
        })
    })
    

    }

    return (
        <form className="CommentAdder" onSubmit={handleSubmit}>
            <label htmlFor="newComment">Add a comment</label>
            <textarea id="newComment" required
            value={ newComment }
            onChange={(e) => setNewComment(e.target.value)}
            ></textarea>
            <button disabled={!newComment}>Add</button>
        </form>
    )
}

export default CommentAdder
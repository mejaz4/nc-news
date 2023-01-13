import { patchVote } from "./api";
import { useState } from "react";

const UpVote = ({ votes, article_id }) => {

    const [voteChange, setVoteChange] = useState(0);

    const increaseVote = (voteChange) => {
        setVoteChange((currVote) => currVote + voteChange)
        patchVote(article_id, voteChange).catch(() => {
            setVoteChange((currVote) =>
                currVote - voteChange)
            alert("Vote failed to submit")
        })
    }

    return (
        <section className="vote">
            <p>Votes for this article: <span>{votes + voteChange} </span></p>
            
            <button onClick={() => increaseVote(1)}>Vote👍🏽</button>
            <button onClick={() => increaseVote(-1)}>Un-vote👎🏽</button>
        </section>
    )

}

export default UpVote;


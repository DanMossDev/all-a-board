import './VoteBox.css'
import { useState } from "react";
import { reviewVote } from '../../axios'
export default function VoteBox({currentVotes, review_id}) {
    const [votes, setVotes] = useState(currentVotes)

    function handleVote(inc_votes) {
        setVotes(votes + inc_votes)
        reviewVote(review_id, inc_votes)
        .catch(err => setVotes(votes - inc_votes))
    }

    return <section className="vote">
        <button className="vote-arrow" onClick={() => handleVote(1)}>Up</button>
        <h3>{votes}</h3>
        <button className="vote-arrow" onClick={() => handleVote(-1)}>Dn</button>
    </section>
}
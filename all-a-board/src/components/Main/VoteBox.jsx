import { useState } from "react";
import { reviewVote } from '../../axios'
export default function VoteBox({currentVotes, review_id}) {
    const [votes, setVotes] = useState(currentVotes)

    function handleVote(inc_votes) {
        setVotes(votes + inc_votes)
        reviewVote(review_id, inc_votes)
    }

    return <section className="vote">
        <button onClick={() => handleVote(1)}>Up</button>
        <h3>{votes}</h3>
        <button onClick={() => handleVote(-1)}>Dn</button>
    </section>
}
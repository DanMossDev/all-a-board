import './VoteBox.css'
import { useState } from "react";
import { updateVote } from '../../axios'

export default function VoteBox({currentVotes, id, target}) {
    const [votes, setVotes] = useState(0)

    function handleVote(inc_votes) {
        setVotes(votes + inc_votes)
        updateVote(target, id, inc_votes)
        .catch(err => setVotes(votes - inc_votes))
    }

    return <section className="vote">
        <button className="vote-arrow" onClick={() => handleVote(1)}>Up</button>
        <h3>{votes + currentVotes}</h3>
        <button className="vote-arrow" onClick={() => handleVote(-1)}>Dn</button>
    </section>
}
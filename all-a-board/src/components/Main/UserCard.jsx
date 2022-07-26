import { useNavigate } from 'react-router-dom'
import './UserCard.css'

export default function UserCard({user, setCurrentUser}) {
    const navigate = useNavigate()
    const {username, avatar_url, name} = user
    return <div className="user-card" onClick={() => {setCurrentUser(user); navigate(`../reviews`, {replace: true})}}>
        <img className="avatar"src={avatar_url}/>
        <div className="user-details">
        <h2>{username}</h2>
        <h3><em>{name}</em></h3>
        </div>
    </div>
}
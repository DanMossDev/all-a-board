import { useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import { UserContext } from '../../UserContext'
import './UserCard.css'

export default function UserCard({user}) {
    const navigate = useNavigate()
    const {setUser} = useContext(UserContext)
    const {username, avatar_url, name} = user
    return <div className="user-card" onClick={() => {setUser(user); navigate(`../reviews`, {replace: true})}}>
        <img className="avatar"src={avatar_url}/>
        <div className="user-details">
        <h2>{username}</h2>
        <h3><em>{name}</em></h3>
        </div>
    </div>
}
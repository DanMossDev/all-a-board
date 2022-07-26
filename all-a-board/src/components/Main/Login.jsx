import { useState, useEffect } from "react";
import { getUsers } from "../../axios";
import UserCard from "./UserCard";

export default function Login({setCurrentUser}) {
    const [users, setUsers] = useState([])
    useEffect(() => {
        getUsers().then(({data}) => setUsers(data))
    }, [])

    return <main>
        {users.map(currUser => {
            return <UserCard key={currUser.username} user={currUser} setCurrentUser={setCurrentUser}/>
        })}
    </main>
}
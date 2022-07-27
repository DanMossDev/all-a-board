import { useState, useEffect } from "react";
import { getUsers } from "../../axios";
import UserCard from "./UserCard";

export default function Login({setCurrentUser}) {
    const [users, setUsers] = useState([])
    const [isLoading, setIsLoading] = useState(true)
    useEffect(() => {
        getUsers().then(({data}) => {
            setUsers(data)
            setIsLoading(false)
        })
    }, [])

    return <main>
        {isLoading ? <div id="preloader"><div id="loader"></div></div> : users.map(currUser => {
            return <UserCard key={currUser.username} user={currUser} setCurrentUser={setCurrentUser}/>
        })}

    </main>
}
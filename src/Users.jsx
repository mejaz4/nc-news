import {useEffect,useState} from 'react'
import { getUsers } from './api'

const Users = () => {
    const [userList,setUserList] = useState([])
    useEffect(() => {
        getUsers()
        .then((users) => {
            setUserList(users)
            
        })
    },[])
    

    return (
        <div className="user-list">
            <h2>Total users: {userList.length}</h2>
                <ul>
                    {userList.map((user) => {
                        return <li key={user.username}>
                            <h3 className="user-text">{user.username}</h3>
                            <h4 className="user-text">Kudos:{user.kudos}</h4>
                            <img src={user.avatar_url} className="user-image" alt={`avatar of ${user.username}`}/>
                        </li>
                    })}
                </ul>


        </div>
    )


}

export default Users
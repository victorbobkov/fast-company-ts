import React, {useState} from 'react'
import './App.css'
import Users from './components/Users'
import API from "./api"
import SearchStatus from "./components/SearchStatus"

function App() {
    const [users, setUsers] = useState(API.users.fetchAll())

    const handleDelete = (userId: string) => {
        setUsers(users.filter((user) => user._id !== userId))
    }

    const handleToggleBookmark = (id: string) => {
        setUsers(
            users.map((user) => {
                if (user._id === id) {
                    return {...user, bookmark: !user.bookmark}
                }
                return user
            })
        )
    }

    return (
        <div>
            <SearchStatus length={users.length}/>
            <Users
                onDelete={handleDelete}
                onToggleBookmark={handleToggleBookmark}
                users={users}
            />
        </div>
    )
}

export default App

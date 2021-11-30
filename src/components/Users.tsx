import React from 'react'
import User from './User'

type UsersType = {
    users: Array<string>
}

const Users = ({users, ...rest}: UsersType) => {
    return (
        <>
            {users.length > 0 && (
                <table className="table">
                    <thead>
                        <tr>
                            <th scope='col'>Имя</th>
                            <th scope='col'>Качества</th>
                            <th scope='col'>Профессия</th>
                            <th scope='col'>Встретился, раз</th>
                            <th scope='col'>Оценка</th>
                            <th />
                        </tr>
                    </thead>
                    <tbody>
                        {users.map((user: any) => ( // ?
                            <User {...rest} {...user} />
                        ))}
                    </tbody>
                </table>
            )}
        </>
    )
}

export default Users
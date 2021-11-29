import React, {useState} from 'react'
import APT from '../api'

const Users = () => {
    const [users, setUsers] = useState(APT.users.fetchAll())
    
    const handleDelete = (userId: string) =>
        setUsers(users.filter((user) => user._id !== userId))

    const renderPhrase = (number: number) => {
        const lastOne = Number(number.toString().slice(-1))
        if (number > 4 && number < 15) return "человек тусанет"
        if ([2, 3, 4].indexOf(lastOne) >= 0) return "человека тусанут"
        if (lastOne === 1) return "человек тусанет"
        return "человек тусанет"
    }

    return (
        <>
            <h2>
                <span className={'badge bg-' + (users.length > 0 ? 'primary' : 'danger')}>
                {' '}
                    {users.length > 0
                        ? `${users.length} ${renderPhrase(
                            users.length
                        )} с тобой сегодня`
                        : "Никто с тобой не тусанет"}
                </span>
            </h2>
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
                    {users.map((user) => (
                        <tr key={user._id}>
                            <td>{user.name}</td>
                            <td>
                                {user.qualities.map((quality) => (
                                    <span
                                        key={quality._id}
                                        className={'badge m-1 rounded-pill bg-' + quality.color}
                                    >
                                        {quality.name}
                                    </span>
                                ))}
                            </td>
                            <td>{user.profession.name}</td>
                            <td>{user.completedMeetings}</td>
                            <td>{user.rate}/5</td>
                            <td><button
                                className={'btn btn-danger'}
                                onClick={() => handleDelete(user._id)}
                            >
                                Удалить
                            </button></td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </>
    )
}

export default Users
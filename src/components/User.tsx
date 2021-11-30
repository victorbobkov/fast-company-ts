import React from 'react'
import Quality from "./Quality"
import Bookmark from "./Bookmark"

type UserType = {
    _id: string,
    name: string,
    qualities: Array<string>, // ?
    profession: object | any, // ? object
    completedMeetings: number,
    rate: number,
    onDelete: any, // ? function
    bookmark: boolean,
    onToggleBookmark: any // ? function
}

const User = ({
    _id,
    name,
    qualities,
    profession,
    completedMeetings,
    rate,
    onDelete,
    bookmark,
    onToggleBookmark
}: UserType) => {
    return (
        <tr key={_id}>
            <td>{name}</td>
            <td>
                {qualities.map((quality: any) => (
                    <Quality {...quality} />
                ))}
            </td>
            <td>{profession.name}</td>
            <td>{completedMeetings}</td>
            <td>{rate}/5</td>
            <td>
                <Bookmark
                    status={bookmark}
                    onClick={() => onToggleBookmark(_id)}
                />
            </td>
            <td>
                <button
                    className={'btn btn-danger'}
                    onClick={() => onDelete(_id)}
                >
                    Удалить
                </button>
            </td>
        </tr>
    )
}

export default User
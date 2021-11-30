import React from 'react'

type BookmarkType = {
    status: boolean,
    onClick: any
}

const Bookmark = ({status, ...rest}: BookmarkType) => {
    return (
        <button {...rest}>
            <i className={'bi bi-bookmark-plus' + (status ? '-fill' : '')}></i>
        </button>
    )
}

export default Bookmark
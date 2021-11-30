import React from 'react'

type SearchStatusType = {
    length: number
}

const SearchStatus = ({length}: SearchStatusType) => {
    const renderPhrase = (number: number) => {
        const lastOne = Number(number.toString().slice(-1))
        if (number > 4 && number < 15) return "человек тусанет"
        if ([2, 3, 4].indexOf(lastOne) >= 0) return "человека тусанут"
        if (lastOne === 1) return "человек тусанет"
        return "человек тусанет"
    }

    return (
        <h2>
                <span className={'badge bg-' + (length > 0 ? 'primary' : 'danger')}>
                {' '}
                    {length > 0
                        ? `${length} ${renderPhrase(
                            length
                        )} с тобой сегодня`
                        : "Никто с тобой не тусанет"}
                </span>
        </h2>
    )
}

export default SearchStatus
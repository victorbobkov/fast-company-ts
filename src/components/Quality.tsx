import React from 'react'

type QualityType = {
    color: string,
    name: string,
    _id: string
}

const Quality = ({color, name, _id}: QualityType) => {
    return (
        <span className={'badge m-1 bg-' + color} key={_id}>
            {name}
        </span>
    )
}

export default Quality
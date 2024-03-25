import React from 'react'

const Counetr = ({ handleClick, count }) => {


    return (
        <div onClick={handleClick}>
            
            <button data-action="decrement">-</button>
            <span>{count}</span>
            <button data-action="increment">+</button>
        </div>
    )
}

export default Counetr
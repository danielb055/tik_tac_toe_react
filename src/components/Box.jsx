import React from 'react'

const Box = (props) => {



    return (
        <div className='box' onClick={(e) => props.placeLetter(e, props.row, props.col)}>
            {props.value}
        </div>
    )
}

export default Box

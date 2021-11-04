import React from 'react'
import './Input.css'

const Input = ({ label,...rest }) => { //recibe los para metros de label y el resto en 'rest'
    return (
        <div className="field">
            <label>{label}</label>
            { <input {...rest} /> }
        </div>
    )
}

export default Input

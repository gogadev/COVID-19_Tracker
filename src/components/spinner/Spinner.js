import React from 'react'

import spinner from "../../assets/spinner.gif"

import "./spinner.style.css"

const Spinner = () => {
    return (
        <div className="spinner">
            <img className="gif" src={spinner} alt=""/>
        </div>
    )
}

export default Spinner

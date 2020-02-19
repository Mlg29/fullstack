import React from 'react'
import "./button.scss"



const Button = (props) => {
    return (
        <div className="button-div">
            <button className="button" type="button">{props.children}</button>
        </div>
    )
}

export default Button
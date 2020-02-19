import React from "react"
import "./response.scss"


const Response = (props) => {
    return (
        <div className="response">
            <h4 className="response-header">{props.text}</h4>
            <div className="response-div">
                <img className="response-image" src={props.image} alt="" />
                <div className="response-div-div">
                        <img className="response-div-rating" src={props.rating} alt="" />
                        <h1 className="response-name">{props.name}</h1>
                        <p className="response-title">{props.title}</p>
                    
                </div>
            </div>
        </div>
    )
}

export default Response
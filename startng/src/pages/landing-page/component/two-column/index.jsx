import React from "react"
import "./two-column.scss"
import Button from "../Buttons"


const TwoColumn = (props) => {
    return (
        <div className="two-column">
            <div className="two-column_div">
                <img className="two-column_image" src={props.image} alt="" />
            </div>
            <div className="two-column_div">
                <h1 className="two-column_header">{props.header}</h1>
                <p className="two-column_paragraph">{props.text}</p>
                <Button>{props.button}</Button>
            </div>
        </div>
    )
}

export default TwoColumn
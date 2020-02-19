import React from "react"
import "./header-wrapper.scss"
import Button from "../Buttons"

const HeaderWrapper = (props) => {
    return (
        <div className="header-section">
            <img className="header-section__image" src={props.image} alt="" />
            <div className="header-section-div">
                <h3 className="header-section__header">{props.header}</h3>
                <p className="header-section__paragraph">{props.text}</p>
                 <div className="header-section__button"> 
                    <Button>{props.button}</Button>
                </div>
            </div>
           
    </div>
    )
}

export default HeaderWrapper
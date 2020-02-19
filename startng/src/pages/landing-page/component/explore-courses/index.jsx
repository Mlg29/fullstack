import React from 'react'
import "./explore.scss"

const Explore = (props) => {
    return (
        <div className="explore">
            <img className="explore-image" src={props.image} alt="" />
            <div className="explore-container">
                <h1 className="explore-header">{props.heading}</h1>
                <p className="explore-paragraph">{props.paragraph}</p>
                <img className="rating" src={props.rating} alt=""/>
                <div className="explore-buttons">
                    <button className="button1" type="btn">{props.button1}</button>
                    <button className="button2" type="btn">{props.button2}</button>
                </div>
            </div>
            
        </div>
    )
}
export default Explore
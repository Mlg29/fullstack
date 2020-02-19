import React from "react"
import "./subscribe.scss"
import Button from "../Buttons"



const Subscribe = () => {
    return (
        <div className="subscribe">
            <div className="subscribe-div">
                <h1 className="subscribe-header">Subscribe to our Newsletter</h1>
                <p className="subscribe-paragraph">Stay Updated with our latest news, discount and promotions</p>
                <div className="subscribe-form">
                    <input className="subscribe-input" type="email" placeholder="Email Address" />
                    <div className="subscribe-button">
                        <Button>Subscribe</Button>
                    </div>                  
                </div>
                
            </div>
            <div className="subscribe-div1">
                <img src="https://res.cloudinary.com/dtbjhs8a6/image/upload/v1578934389/startng/ymaqz9ozkofhykfb4jzn.png" alt="" />
            </div>
        </div>
    )
}

export default Subscribe
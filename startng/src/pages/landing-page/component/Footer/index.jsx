import React from "react"
import "./footer.scss"
import Button from "../Buttons"
import { Link } from "react-router-dom"

const Footer = () => {
    return (
        <div className="footer">
            <img className="footer-image" src="https://res.cloudinary.com/dtbjhs8a6/image/upload/v1578934390/startng/ydqdi2d7dy1314jdtpd7.png" alt="" />
            <div className="footer-link">
                <div className="footer-link-div">
                    <h1 className="footer-text">Ready to take the leap?</h1>
                    <Button>Start</Button>
                </div>
                <div className="footer-link-div1">
                    <Link className="footer_link" to="/">About us</Link>
                    <Link className="footer_link" to="/">Our Course</Link>
                    <Link className="footer_link" to="/">Hire a Grad</Link>
                </div>
                <div className="footer-link-div1">
                    <Link className="footer_link" to="/">Curriculum</Link>
                    <Link className="footer_link" to="/">Blog</Link>
                    <Link className="footer_link" to="/">Student Stories</Link>
                </div>
                <div className="footer-link-div1">
                    <Link className="footer_link" to="/">Find a Course</Link>
                    <Link className="footer_link" to="/">Our Partners</Link>
                    <Link className="footer_link" to="/">Contact us</Link>
                </div>
                <div className="footer-link-div1">
                    <Link className="footer_link" to="/">FAQ</Link>
                    <Link className="footer_link" to="/">Terms of Service</Link>
                    <Link className="footer_link" to="/">Privacy Policy</Link>
                </div>
            </div>
            <div className="footer-icon-div">
                <img className="footer-icon" src="https://res.cloudinary.com/dtbjhs8a6/image/upload/v1578934400/startng/fpbbrvkqjfoewotshfqi.png" alt="" />
                <img className="footer-icon" src="https://res.cloudinary.com/dtbjhs8a6/image/upload/v1578934400/startng/jgmdwhhdgmatgxbcl4dz.png" alt="" />
                <img className="footer-icon2" src="https://res.cloudinary.com/dtbjhs8a6/image/upload/v1578934401/startng/vreosxm7xjwtf7dzcp8y.png" alt="" />
            </div>
        </div>
    )
}

export default Footer
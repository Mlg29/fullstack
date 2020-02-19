import React from "react"
import "./homepage.scss"
import Navigation from "../../../components/Navigation/Navigation"
import HeaderWrapper from "../component/Header-wrapper"
import Button from "../component/Buttons"
import Explore from "../component/explore-courses"
import { Link } from "react-router-dom"
import TwoColumn from "../component/two-column"
import Response from "../component/Response"
import Subscribe from "../component/Subscription"
import Footer from "../component/Footer"

const Homepage = () => {
    return (
        <div className="homepage">
            <Navigation />
            <HeaderWrapper 
                    image="https://res.cloudinary.com/dtbjhs8a6/image/upload/v1578991116/startng/vpgy8rx4hvu14i8zt6so.png"
                    header="Up Your Tech Game Online or Onsite"
                    text="The HNG internship is a 3-month remote internship designed to find and develop the most talented software developers"
                    button="Start Learning"
            />
            <div className="journey">
                <div className="journey-div">
                    <h1 className="journey-header">Begin Your Journey to Self Development</h1>
                    <p className="journey-paragraph">The HNG internship is a 3-month remote internship designed to 
                        find and develop the most talented software developers. Everyone 
                        is welcome to participate (there is no entrance exam). Anyone can 
                        log into the internship using their laptop. Each week, we give tasks.
                        <br />
                          <div className="journey-button">
                            <input className="journey-input" type="search" placeholder="Type in your preferred course" /> 
                            <Button><img src="https://res.cloudinary.com/dtbjhs8a6/image/upload/v1579002839/startng/h970xz1np8zlapva5nmt.png" alt="" /> Find A Course</Button>
                        </div>
                        
                    </p>
                </div>

                <div className="journey-div">
                    <div className="journey-div-div">
                        <div className="journey-image-div"></div>
                        <img className="journey-image" src="https://res.cloudinary.com/dtbjhs8a6/image/upload/v1578934381/startng/fna9qa6bxr9vx88bc9az.png" alt="" />
                        <div className="journey-image-div2"></div>
                        <div className="journey-image-div3"></div>
                    </div>
                </div>
            </div>


            <div className="home-explore">
                <h1 className="text-center explore-courses">Explore Our Courses</h1>
                <hr />
                <div className="home-section">
                    <Explore 
                    image="https://res.cloudinary.com/dtbjhs8a6/image/upload/v1578934398/startng/syfw7blooqg0wwwezc1v.png"
                    heading="Frontend Development"
                    paragraph="Learn the fundamentals of 
                    Modern Frontend Development..."
                    rating="https://res.cloudinary.com/dtbjhs8a6/image/upload/v1579008806/startng/mg5anxp1j2ibzwhkuzvu.png"
                    button1="ONLINE"
                    button2="FREE"
                
                />
                <Explore 
                    image="https://res.cloudinary.com/dtbjhs8a6/image/upload/v1578934399/startng/rtdmgncbcvxvgdicmjyu.png"
                    heading="Backend Development"
                    paragraph="Learn the fundamentals of 
                    Modern Backend Development..."
                    rating="https://res.cloudinary.com/dtbjhs8a6/image/upload/v1579008806/startng/mg5anxp1j2ibzwhkuzvu.png"
                    button1="ONLINE"
                    button2="FREE"
                
                />
                <Explore 
                    image="https://res.cloudinary.com/dtbjhs8a6/image/upload/v1578934398/startng/syfw7blooqg0wwwezc1v.png"
                    heading="UI/UX Development"
                    paragraph="Learn the fundamentals of 
                    Modern UI/UX Development..."
                    rating="https://res.cloudinary.com/dtbjhs8a6/image/upload/v1579008806/startng/mg5anxp1j2ibzwhkuzvu.png"
                    button1="ONLINE"
                    button2="FREE"
                
                />
                </div>
                <div className="home-section2">
                    <Explore 
                    image="https://res.cloudinary.com/dtbjhs8a6/image/upload/v1578934399/startng/rtdmgncbcvxvgdicmjyu.png"
                    heading="Mobile Development"
                    paragraph="Learn the fundamentals of 
                    Modern Mobile Development ..."
                    rating="https://res.cloudinary.com/dtbjhs8a6/image/upload/v1579008806/startng/mg5anxp1j2ibzwhkuzvu.png"
                    button1="ONLINE"
                    button2="FREE"
                
                />
                <Explore 
                    image="https://res.cloudinary.com/dtbjhs8a6/image/upload/v1578934398/startng/syfw7blooqg0wwwezc1v.png"
                    heading="Data Science"
                    paragraph="Learn the fundamentals of 
                    Modern Data Sciencist ..."
                    rating="https://res.cloudinary.com/dtbjhs8a6/image/upload/v1579008806/startng/mg5anxp1j2ibzwhkuzvu.png"
                    button1="ONLINE"
                    button2="FREE"
                
                />
                </div>
                
            </div>

            <div className="career">
                <div className="career-div">
                    <div className="career-div-div">
                        <h1 className="career-header">The beginning of your career starts here. With us.</h1>
                        <h3 className="career-header2">-- Intensive learning sessions </h3>
                        <p className="career-paragraph">The HNG internship is a 3-month remote internship designed ---to find 
                            and develop the most talented software developers.  
                        </p>

                        <h3 className="career-header2">-- Intensive learning sessions </h3>
                        <p className="career-paragraph">The HNG internship is a 3-month remote internship designed ---to find 
                            and develop the most talented software developers.  
                        </p>
                        <Link className="link" to="/">Learn more >></Link>
                    </div>
                    
                </div>
                <img src="https://res.cloudinary.com/dtbjhs8a6/image/upload/v1578991090/startng/lvuszufj7wgyizrffaq6.png" alt="" />
            </div>

            <TwoColumn 
                image="https://res.cloudinary.com/dtbjhs8a6/image/upload/v1578934380/startng/hvusbrdzutfpctobpgjd.png"
                header="Take Your First Steps in Achieving Your Dreams"
                text="The HNG internship is a 3-month remote internship designed to find and develop the most talented software developers. 
                Everyone is welcome to participate (there is no entrance exam)."
                button="Start Learning"
            />

            <div className="professional">
                <img className="professional-image" src="https://res.cloudinary.com/dtbjhs8a6/image/upload/v1578991110/startng/fdzldukjbmr1ucxval95.png" alt="" />
                <div className="professional-div">
                    <h1 className="professional-header">Need Professional Help?</h1>
                    <p className="professional-text">After 3 months of training and projects, our graduates 
                        are ready to take on full-time or remote jobs at your company.
                    </p>
                    <Button>Hire a Graduate</Button>
                </div>
            </div>

            <h1 className="text-center people">What people have to say about us</h1>
             <div>
                <Response 
                    text="The HNG internship is a 3-month remote internship designed to find and develop the most talented software developers. Everyone is welcome to participate (there is no entrance exam). Anyone can log into the internship using their laptop. Each week, we give tasks. "
                    image="https://res.cloudinary.com/dtbjhs8a6/image/upload/v1578934389/startng/dfe5hb3b1s1vrptlok1s.png"
                    rating="https://res.cloudinary.com/dtbjhs8a6/image/upload/v1579008806/startng/mg5anxp1j2ibzwhkuzvu.png"
                    name="Dennis Lagbaja"
                    title="Completed the Front End Developer Class"
                />
                <Response 
                    text="The HNG internship is a 3-month remote internship designed to find and develop the most talented software developers. Everyone is welcome to participate (there is no entrance exam). Anyone can log into the internship using their laptop. Each week, we give tasks. "
                    image="https://res.cloudinary.com/dtbjhs8a6/image/upload/v1579087114/startng/y0al3uayrm2o0clis60m.png"
                    rating="https://res.cloudinary.com/dtbjhs8a6/image/upload/v1579008806/startng/mg5anxp1j2ibzwhkuzvu.png"
                    name="Khadirat Uche Jumbo"
                    title="Completed the Laravel PHP Class"
                />
            </div>

            <div className="offline">
                <h1 className="offline-header">Online or Offline, We Are Here For You</h1>
                <p className="offline-text">The HNG internship is a 3-month remote internship designed to find and develop the most talented software developers.</p>
                <Button>Start Learning</Button>
            </div>
            <Subscribe />
            <Footer />
        </div>
    )
}

export default Homepage
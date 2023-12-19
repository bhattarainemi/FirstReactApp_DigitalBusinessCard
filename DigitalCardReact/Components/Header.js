import React from "react"
export default function Header(){
    return (
        <div>
            <div className="header-desc">
                <div className = "image-container">
                    <img className = "profile-pic" src="../SatyataPic.jpg" alt="Cute Baby pic" />
                </div>
                <h1 id="profile-name">Satyata Bhattarai</h1>
                <p id="profileDesc">Frontend developer's daughter</p>
                <p id="profileEmail">bhattarainemi7@gmail.com</p>
            </div>
            <div className = "header-btn-container">
                <a id = "email" href="https://www.linkedin.com/in/nemi-bhattarai-96844114a/" target="_blank"><i className="fa-solid fa-envelope"></i>Email</a>
                <a id ="linkedIn" href="https://www.linkedin.com/in/nemi-bhattarai-96844114a/" target="_blank"><i className="fa-brands fa-linkedin"></i>LinkedIn</a>
            </div>
        </div>
    )
}
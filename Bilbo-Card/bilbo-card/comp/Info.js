import React from "react"

export default function Info(){
    return(
        <div>
            <div className="info--container">
                <img className="info--icon" src="./img/bilbo-icon.PNG" alt="image of the person" />
                <h1 className="info--h1">Bilbo Baggins</h1>
                <h2 className="info--h2">Frontend Developer</h2>
                <h3 className="info--h3">bilbo's website</h3>
                <div className="buttons">
                    <a className="btn--email" href="#">Email</a>
                    <a className="btn--linkedin" href="#">Linkedin</a>
                </div>
            </div>
        </div>
    )
}
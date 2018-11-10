import React, { Component } from 'react'

class Project extends Component {
    render() {
        return (
            <div className="recent-work-container">

                <div className="textContainer">
                    <img src="./img/project-img.jpg" alt="
                    " />
                    <div className="text">
                        <h4 className="recent-work-title">Title of project</h4>
                        <p className="recent-work-description">Description of project</p>
                        <a className="button" href="">Link to project</a>
                    </div>
                </div>
            </div>
        )
    }
}


export default Project;


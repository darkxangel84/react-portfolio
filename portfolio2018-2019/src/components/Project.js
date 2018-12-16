import React, { Component } from 'react'


class Project extends Component {

    render() {
        const { project_title, project_description, project_img, project_link, project_skills } = this.props.project;
        return (<div className="recent-work-container">
            <img src={project_img} alt="project" />
            <div className="text-container">
                <div className="text">
                    <h4 className="recent-work-title">{project_title}</h4>
                    <p className="recent-work-description">{project_description}</p>
                    <a className="button" href="">{project_link}</a>
                </div>
            </div>
        </div>)
    }
}


export default Project;


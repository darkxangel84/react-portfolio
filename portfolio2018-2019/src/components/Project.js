import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class Project extends Component {

    render() {
        const { id, project_title, project_description, project_img, project_link, project_skills } = this.props.project;
        return (<div className="recent-work-container">
            <img src={project_img} alt="project" />
            <div className="text-container">
                <div className="text">
                    <h4 className="recent-work-title">{project_title}</h4>
                    <p className="recent-work-description">{project_description}</p>
                    <Link  to={{
                    pathname: `/projects/${id}`,
                    state: {
                        title:  project_title,
                        description: project_description,
                        img: project_img,
                        link: project_link,
                        skills: project_skills
                    }
                    
                    }}
                    className="button">View Project</Link>
                </div>
            </div>
        </div>)
    }
}


export default Project;


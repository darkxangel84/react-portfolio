import React, { Component } from 'react'


class Project extends Component {

    render() {
        const { project_title, project_description } = this.props.project;
        return (
            <div className="recent-work-container">
                <div className="recent-work-title">{project_title}</div>
                <div className="recent-description">{project_description}
                </div>
            </div>
        )
    }
}


export default Project;


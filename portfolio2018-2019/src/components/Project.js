import React, { Component } from 'react'


class Project extends Component {

    render() {
        const { project_title, project_description } = this.props.project;
        return (<div className="recent-work-container">

            <div className="text-container">
                <div className="text">
                    <h4 className="recent-work-title">{project_title}</h4>
                    <p className="recent-description">{project_description}</p>
                </div>

            </div>

        </div>)
    }
}


export default Project;


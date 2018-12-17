import React, { Component } from 'react'

class Project_pg extends Component {

    render() {
        const { location, match } = this.props
        console.log(match.url)
        return (
          
            <div className="container">
                <h1>{location.state.title}</h1>
                <img src={location.state.img} alt="project"/>
                <p>{location.state.description}</p>
                <p>{location.state.skills}</p>
                <a target="_blank" href={location.state.link}>Visit Website</a>
            </div>
        )
    }
}

export default Project_pg;
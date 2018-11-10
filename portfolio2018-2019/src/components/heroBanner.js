import React, { Component } from 'react'

class heroBanner extends Component {
    render() {
        return (
            <div className="hero-container">
                <div className="hero-content">
                    <h1>Need a Website? I'm {this.props.name}, a Front-end Web Developer</h1>
                    <h2>Building Responsive Websites</h2>
                </div>
            </div>
        )
    }
}

export default heroBanner;

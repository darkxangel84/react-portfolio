import React, { Component } from 'react'

class heroBanner extends Component {
    render() {
        return (
            <div className="hero">
                <div className="hero-content">
                    <h1 className="heroh1">Need a Website? I'm {this.props.name}, a Front-end Web Developer</h1>
                    <h2 className="heroh2 ">Building Responsive Websites</h2>
                </div>
            </div>
        )
    }
}

export default heroBanner;

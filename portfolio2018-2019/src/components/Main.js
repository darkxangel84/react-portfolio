import React, { Component } from 'react';
import Project from './Project';
import axios from 'axios';

class Main extends Component {

    state = {
        data: []
    }

    componentDidMount() {
        axios.get(`http://localhost:3000/data.json`)
            .then(res => {
                const data = res.data;
                this.setState({ data });
            })
    }


    render() {
        return (
            <div className="container">
                <h2>{this.props.headingTitle}</h2>
                <p>I'm a Front-End Web Developer, based in Dunstable, Bedfordshire, I design and develop simple and stylish responsive websites for small businesses, organisations or individuals, at affordable prices.</p>

                <p>I am always looking for new projects and would love to work with you and bring your dream to life. Feel free to contact me and we can talk about it, I am here to help you with your needs.</p>

                <div id="recentwork" className="recent-work-title">
                    <h3>Recent Work</h3>
                    <hr></hr>
                    <p>Take a look at my portfolio of all work I have perviously done for clients and friends.</p>
                </div>
                <div className="recent-work">
                    {this.state.data.map((project, i) =>
                        <Project key={i} project={project} />
                    )}
                </div>

            </div>
        )
    }
}

export default Main;

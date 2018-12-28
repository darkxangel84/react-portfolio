import React, { Component } from 'react'
import Experience from '../Experience'
import Skills from '../Skills'

class About_pg extends Component {
    render() {
        return (
            <div className="container">
                <h1>About Me</h1>
                <p>I'm Aimee a self taught Front-end Web Developer with 3 years experience. I primarily focus on writing clean, elegant, &amp; efficient code. I have skills in HTML, CSS &amp; Javascript, and currently learning with React
                    <br />
                    I am committed to having an impact on the future of any company that I work for and possess the enthusiasm and commitment to learn and develop my career within a growing business.</p>

                <Skills />
                <Experience />
            </div >
        )
    }
}
export default About_pg;
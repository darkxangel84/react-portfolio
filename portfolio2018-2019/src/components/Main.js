import React, { Component } from 'react';
import Project from './Project';

class Main extends Component {
    render() {
        return (
            <div className="container">
                <h2>{this.props.headingTitle}</h2>
                <p>pibus tellus. In ullamcorper dui purus, vitae vestibulum erat iaculis et. Integer semper faucibus euismod. Sed eu tortor tortor. Vivamus sed magna sed diam ultricies sagittis eu sit amet mauris. Sed commodo quis ex in commodo. Phasellus nec ante efficitur, aliquam leo nec, tempus diam. Aenean tincidunt turpis lectus, ac dictum sem rhoncus non. Cras est est, mollis a orci id, tristique pharetra lectus. Pellentesque efficitur molestie euismod.</p>

                <Project />
            </div>
        )
    }
}

export default Main;
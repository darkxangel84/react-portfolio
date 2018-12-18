import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Header extends Component {
    constructor(props){
        super(props);

        this.isActive = this.isActive.bind(this);
        this.state = {
            active: false,
        }
    }

    isActive() {
        this.setState ({
            active: !this.state.active
        })
    }

    render() {
        return (
            <div>
                <header>
                    <div className="logo">
                        <Link to='/' className="nav-link">
                            <h1>{this.props.title}</h1>
                        </Link>
                    </div>

                    <div onClick={this.isActive} id="burgermenu">
                        <div id="bar" className={this.state.active ? 'rotatebar1': null}></div>
                        <div id="bar" className={this.state.active ? 'hidebar2': null} ></div>
                        <div id="bar" className={this.state.active ? 'rotatebar3': null}></div>
                    </div>
                    <nav className={this.state.active ? 'toogleNav': null} >
                        <ul className="nav-items">
                            <li>
                                <Link to='/about' className='nav-link'>About</Link>
                            </li>
                            <li>
                                <Link to='/projects' className='nav-link'>Projects</Link>
                            </li>
                        </ul>
                    </nav>
                </header>
            </div>

        )
    }
}

export default Header;
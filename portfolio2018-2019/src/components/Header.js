import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Header extends Component {
    render() {
        return (
            <div>
                <header>
                    <div className="logo">
                        <Link to='/' className="nav-link">
                            <h1>{this.props.title}</h1>
                        </Link>
                    </div>

                    <div className="burgermenu">
                        <div className="bar"></div>
                        <div className="bar"></div>
                        <div className="bar"></div>
                    </div>
                    <nav>
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
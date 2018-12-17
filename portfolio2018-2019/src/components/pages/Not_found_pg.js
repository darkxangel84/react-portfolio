import React, { Component } from 'react'
import { Link } from 'react-router-dom';

class Not_found_pg extends Component {

    render() {
   
        return (
          
            <div className="container">
                <h1>404 Page not found</h1>
                <Link to="/">Return to Home Page</Link>
            </div>
        )
    }
}

export default Not_found_pg;
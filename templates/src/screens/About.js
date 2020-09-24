module.exports = `import React from 'react';
import { NavLink } from 'react-router-dom';

class About extends React.Component {
    render() {
        return (
            <div>
                <NavLink to="/" exact>
                    Home
                </NavLink>
                |
                <NavLink to="/about" exact>
                    About
                </NavLink>
                <div>About</div>
            </div>
        );
    }
}

export default About;`;

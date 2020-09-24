module.exports = `import React from 'react';
import { NavLink } from 'react-router-dom';

class Home extends React.Component {
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
                <div>Home</div>
            </div>
        );
    }
}

export default Home;`;

module.exports = `import React from 'react';
import {
    BrowserRouter as Router,
    Route,
    Switch,
    Redirect,
} from 'react-router-dom';
import { connect } from 'react-redux';

import './App.css';

import Home from './screens/Home';
import About from './screens/About';

import { sayHi } from './store/action/index';

class App extends React.Component {
    render() {
        return (
            <main>
                <div> Create react app</div>
                <Router>
                    <Switch>
                        <Route path="/" exact component={Home} />
                        <Route path="/about" exact component={About} />
                        <Redirect to="/" />
                    </Switch>
                </Router>
            </main>
        );
    }
}

const mapStateToProps = state => ({
    message: state.message,
});

const mapDispatchToProps = dispatch => ({
    sayHi: () => dispatch(sayHi()),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);`;

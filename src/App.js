
import React from 'react';
import {Route, BrowserRouter as Router, Switch} from 'react-router-dom';
import { GithubRedirect } from './components/GithubRedirect';
import {Home} from './components/Home';
import { LinkedInRedirect } from './components/LinkedInRedirect';
import {Projects} from './components/Projects';
import {AboutMe} from "./components/AboutMe"

const App = props =>
    <Router>

        <Switch>

            <Route path='/home' exact component={Home}></Route>
            <Route path='/' exact component={Home}></Route>
            <Route path='/about-me' component={AboutMe}></Route>
            <Route path='/projects' component={Projects}></Route>
            <Route path='/github' exact component={GithubRedirect}></Route>
            <Route path='/linkedin' exact component={LinkedInRedirect}></Route>

        </Switch>


    </Router>

export default App;

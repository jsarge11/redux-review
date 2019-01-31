import React from 'react'
import { Route } from 'react-router-dom'
import Nav from './components/Nav/Nav'
import PageOne from './components/PageOne/PageOne';
import PageTwo from './components/PageTwo/PageTwo';
import PageThree from './components/PageThree/PageThree';

export default (
        <div>
            <Nav />
            <div>
                <Route exact path="/" component={PageOne}/>
                <Route path="/pagetwo/:id" component={PageTwo}/>
                <Route path="/pagethree" component={PageThree}/>
            </div>
        </div>
)
import React, { Component } from 'react'
import { Route } from 'react-router-dom'
import Header from './components/partials/Header';
import Home from './components/Home'
import Buddhism from './components/Buddhsim'
import Freud from './components/Freud'
import Papers from './components/Papers'
import CV from './components/CV'
import About from './components/About'
import './App.css'

const links = 
    ['home', 'buddhism and psychology', 'freud in china', 'papers', 'cv', 'about']
    .map(ele => ele.toLowerCase())

const pageLinks = links.map(link => '/' + link.replace(/ /g, "_"))

class App extends Component {

    render() {
        return (
            <div className='app'>
                <Header 
                    links = {links}
                />
                <Route exact path='/' render={() => (
                    <Home />
                )}/>
                <Route path={pageLinks[1]} render={() => (
                    <Buddhism />
                )}/>
                <Route path={pageLinks[2]} render={() => (
                    <Freud />
                )}/>
                <Route path={pageLinks[3]} render={() => (
                    <Papers />
                )}/>
                <Route path={pageLinks[4]} render={() => (
                    <CV />
                )}/>
                <Route path={pageLinks[5]} render={() => (
                    <About />
                )}/>
            </div>
        )
    }
}

export default App;

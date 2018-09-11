import React, { PureComponent } from 'react'
import { Route } from 'react-router-dom'
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

const createPageLink = (pageName) => '/' + pageName.replace(/ /g, "_")

class App extends PureComponent {
    state = {
        activePage: links[0]
    }

    handleNavLinkClick = (evt) => {
        this.setState({activePage: evt.target.id})
    }

    render() {
        return (
            <div className='app'>
                <Route exact path='/' render={() => (
                    <Home
                        links={links}
                        activePage={this.state.activePage}
                        handleNavLinkClick={this.handleNavLinkClick }
                    />
                )}/>
                <Route path={createPageLink(links[1])} render={() => (
                    <Buddhism
                        links={links}
                        activePage={this.state.activePage}
                        handleNavLinkClick={this.handleNavLinkClick }
                    />
                )}/>
                <Route path={createPageLink(links[2])} render={() => (
                    <Freud
                        links={links}
                        activePage={this.state.activePage}
                        handleNavLinkClick={this.handleNavLinkClick }
                    />
                )}/>
                <Route path={createPageLink(links[3])} render={() => (
                    <Papers
                        links={links}
                        activePage={this.state.activePage}
                        handleNavLinkClick={this.handleNavLinkClick }
                    />
                )}/>
                <Route path={createPageLink(links[4])} render={() => (
                    <CV
                        links={links}
                        activePage={this.state.activePage}
                        handleNavLinkClick={this.handleNavLinkClick }
                    />
                )}/>
                <Route path={createPageLink(links[5])} render={() => (
                    <About
                        links={links}
                        activePage={this.state.activePage}
                        handleNavLinkClick={this.handleNavLinkClick }
                    />
                )}/>
            </div>
        )
    }
}

export default App;

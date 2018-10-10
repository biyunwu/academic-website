import React, { Component } from 'react'
import { Switch, Route } from 'react-router-dom'
import * as Data from './data/Data'
import Siderbar from './components/partials/Siderbar'
import Header from './components/partials/Header';
import Home from './components/Home'
import Book from './components/Book'
import Papers from './components/Papers'
import Events from './components/Events'
import About from './components/About'
import Footer from './components/partials/Footer'
import BackgroundImage from './imgs/tj.jpg'
import BuddhismCover from './imgs/buddism-cover.jpg'
import FreudCover from './imgs/freud.jpg'
import infoPic from './imgs/about.JPG'
import './App.css'

const links = 
    ['home', 'buddhism and psychology', 'freud in china', 'papers', 'Events', 'about']
    .map(ele => ele.toLowerCase())

const pageLinks = links.map(link => '/' + link.replace(/ /g, "_"))

class App extends Component {

    state = {
        viewportWidth: 0,
        maxMobileWidth: 500,
        isSidebarOpen: false
    }

    componentDidMount () {
        this.updateViewportWidth()
        window.addEventListener('resize', this.updateViewportWidth)
    }

    componentWillUnmount () {
        window.removeEventListener('resize', this.updateViewportWidth)
    }

    updateViewportWidth = () => {
        this.setState({viewportWidth: window.innerWidth})
        if (window.innerWidth > this.state.maxMobileWidth){
            this.setState({isSidebarOpen: false})
        }
    }

    getPageThemeColors = (data) => {
        const themeColors = {}
        Object.keys(data).forEach(key => {
            const color = data[key].themeColor
            if (color) {
                themeColors[key] = color
            }
        })
        return themeColors
    }

    updateSidebarStatus = () => {
        this.setState(prevState => ({isSidebarOpen: !prevState.isSidebarOpen}))
    }

    render() {
        const {viewportWidth, maxMobileWidth, isSidebarOpen} = this.state
        const isMobileDevice = viewportWidth <= maxMobileWidth
        const data = JSON.parse(Data.getData())
        const pageThemeColors = this.getPageThemeColors(data)
        const sidebarStyle = isSidebarOpen ? {height: '100%'} : {height: '0'}
        // Refer to Hamburgers library: https://github.com/jonsuh/hamburgers
        const menuBaseClassName = "hamburger hamburger--collapse"
        const menuClassName = isSidebarOpen ? menuBaseClassName.concat(" is-active") : menuBaseClassName
        // When sidebar is open, prevent the burger icon from moving when the page is being scrolling up and down.
        // Also, prevent page from scrolling when the sidebar is open.
        const fixedStyle =  isSidebarOpen ? {position: 'fixed'} : {}

        return (
            <React.Fragment>
                {isMobileDevice &&
                    <React.Fragment>
                        <button id='burger' className={menuClassName} type="button"
                            aria-label="Menu" aria-controls="sidebar"
                            onClick={this.updateSidebarStatus}
                            style={fixedStyle}
                        >
                            <span className="hamburger-box">
                                <span className="hamburger-inner"></span>
                            </span>
                        </button>
                        <div id='sidebar' style={sidebarStyle}>
                            <Header isMobileDevice = {true} isSidebarOpen = {true}/>
                            <Siderbar
                                links = {links}
                                themeColors = {pageThemeColors}
                                closeSidebar = {this.updateSidebarStatus}
                            />
                            {/* <button onClick = {this.updateSidebarStatus}>Close</button> */}
                            <Footer isMobileDevice = {isMobileDevice}/>
                        </div>
                    </React.Fragment>
                }
                <div id='app' style={fixedStyle}>
                    <Header 
                        links = {links}
                        themeColors = {pageThemeColors}
                        isMobileDevice = {isMobileDevice}
                    />
                    <Switch>
                        <Route exact path='/' render={() => (
                            <Home
                                backgroundImage = {BackgroundImage}
                            />
                        )}/>
                        <Route exact path={pageLinks[1]} render={() => (
                            // <Buddhism />
                            <Book
                                cover = {BuddhismCover}
                                bookData = {data.buddhism}
                            />
                        )}/>
                        <Route exact path={pageLinks[2]} render={() => (
                            // <Freud />
                            <Book
                                cover = {FreudCover}
                                bookData = {data.freud}
                            />
                        )}/>
                        <Route exact path={pageLinks[3]} render={() => (
                            <Papers
                                papers = {data.papers}
                                viewportWidth = {viewportWidth}
                                maxMobileWidth = {maxMobileWidth}
                            />
                        )}/>
                        <Route exact path={pageLinks[4]} render={() => (
                            <Events
                                events = {data.events}
                            />
                        )}/>
                        <Route exact path={pageLinks[5]} render={() => (
                            <About
                                infoPic = {infoPic}
                                about = {data.about}
                            />
                        )}/>
                        <Route render={() => (
                            <div id='maincontent-container'>
                                <h1 style={{textAlign: 'center' , padding: '20%', verticalAlign: 'middle'}}>Page not found!</h1>
                            </div>
                        )}/>
                    </Switch>
                    <Footer />
                </div>
            </React.Fragment>
        )
    }
}

export default App;

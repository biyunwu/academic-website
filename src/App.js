import React, { Component } from 'react'
import { Route } from 'react-router-dom'
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
        this.setState({isSidebarOpen: !this.state.isSidebarOpen})
    }

    render() {
        const {viewportWidth, maxMobileWidth, isSidebarOpen} = this.state
        const isMobileDevice = viewportWidth <= maxMobileWidth
        const data = JSON.parse(Data.getData())
        const pageThemeColors = this.getPageThemeColors(data)
        const sidebarStyle = isSidebarOpen ? {height: 'auto'} : {height: '0'}

        return (
            <div>
                {isMobileDevice &&
                    <button id='burger'
                        onClick={this.updateSidebarStatus}
                    >
                    </button>
                }
                {isMobileDevice && 
                    <div id='sidebar'
                        style={sidebarStyle}
                    >
                        <button
                            onClick = {this.updateSidebarStatus}
                        >
                            Close
                        </button>
                        <Siderbar
                            links = {links}
                            themeColors = {pageThemeColors}
                            closeSidebar = {this.updateSidebarStatus}
                        />
                    </div>
                }
                <div id='app' onClick={isSidebarOpen && this.updateSidebarStatus}>
                    <Header 
                        links = {links}
                        themeColors = {pageThemeColors}
                        isMobileDevice = {isMobileDevice}
                    />
                    <Route exact path='/' render={() => (
                        <Home
                            backgroundImage = {BackgroundImage}
                        />
                    )}/>
                    <Route path={pageLinks[1]} render={() => (
                        // <Buddhism />
                        <Book
                            cover = {BuddhismCover}
                            bookData = {data.buddhism}
                        />
                    )}/>
                    <Route path={pageLinks[2]} render={() => (
                        // <Freud />
                        <Book
                            cover = {FreudCover}
                            bookData = {data.freud}
                        />
                    )}/>
                    <Route path={pageLinks[3]} render={() => (
                        <Papers
                            papers = {data.papers}
                            viewportWidth = {viewportWidth}
                            maxMobileWidth = {maxMobileWidth}
                        />
                    )}/>
                    <Route path={pageLinks[4]} render={() => (
                        <Events
                            events = {data.events}
                        />
                    )}/>
                    <Route path={pageLinks[5]} render={() => (
                        <About
                            infoPic = {infoPic}
                        />
                    )}/>
                    <Footer />
                </div>
            </div>
        )
    }
}

export default App;

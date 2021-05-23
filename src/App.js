import React, { Component } from 'react'
import { Switch, Route } from 'react-router-dom'
// import { addBackToTop } from 'vanilla-back-to-top'
import * as Data from './data/Data'
import SideBar from './components/partials/SideBar'
import Header from './components/partials/Header';
import Home from './components/Home'
import Book from './components/Book'
import Papers from './components/Papers'
import Events from './components/Events'
import SocialMedia from './components/SocialMedia'
import About from './components/About'
import PdfViewer from './components/PdfViewer'
import Footer from './components/partials/Footer'
import BackgroundImage from './imgs/tj.jpg'
import ChinesePhilCover from './imgs/cover_chinese_phil.jpg'
import BuddhismCover from './imgs/buddhism-cover.jpg'
import FreudCover from './imgs/freud.jpg'
import infoPic from './imgs/about.JPG'
import './App.css'

const links = 
    ['home', 'origins of chinese phil', 'buddhism & psychology', 'freud in china', 'papers', 'Events', 'Twitter', 'about']
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
                                <span className="hamburger-inner"/>
                            </span>
                        </button>
                        <div id='sidebar' style={sidebarStyle}>
                            <Header isMobileDevice = {true} isSidebarOpen = {true}/>
                            <SideBar
                                links = {links}
                                themeColors = {pageThemeColors}
                                closeSidebar = {this.updateSidebarStatus}
                            />
                             {/*<button onClick = {this.updateSidebarStatus}>Close</button>*/}
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
                            // Origin of Chinese Philosophy
                            <Book
                                cover = {ChinesePhilCover}
                                bookData = {data.chinese_phil}
                            />
                        )}/>
                        <Route exact path={pageLinks[2]} render={() => (
                            // <Buddhism />
                            <Book
                                cover = {BuddhismCover}
                                bookData = {data.buddhism}
                            />
                        )}/>
                        <Route exact path={pageLinks[3]} render={() => (
                            // <Freud />
                            <Book
                                cover = {FreudCover}
                                bookData = {data.freud}
                            />
                        )}/>
                        <Route exact path={pageLinks[4]} render={() => (
                            <Papers
                                papers = {data.papers}
                                viewportWidth = {viewportWidth}
                                maxMobileWidth = {maxMobileWidth}
                            />
                        )}/>
                        <Route exact path={pageLinks[5]} render={() => (
                            <Events
                                events = {data.events}
                            />
                        )}/>
                        <Route exact path={pageLinks[6]} render={() => (
                            <SocialMedia/>
                        )}/>
                        <Route exact path={pageLinks[7]} render={() => (
                            <About
                                infoPic = {infoPic}
                                about = {data.about}
                            />
                        )}/>
                        <Route exact path="/buddhism" render={() => (
                            <PdfViewer
                                title={data.buddhism.title}
                                readKey={data.buddhism.readKey}
                                // chapters={data.buddhism.chapters}
                            />
                        )}/>
                        <Route exact path="/freud" render={() => (
                            <PdfViewer
                                title={data.freud.title}
                                readKey={data.freud.readKey}
                                // chapters={data.buddhism.chapters}
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

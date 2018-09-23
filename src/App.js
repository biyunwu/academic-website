import React, { Component } from 'react'
import { Route } from 'react-router-dom'
import * as Data from './data/Data'
import Header from './components/partials/Header';
import Home from './components/Home'
// import Buddhism from './components/Buddhsim'
// import Freud from './components/Freud'
import Book from './components/Book'
import Papers from './components/Papers'
import Events from './components/Events'
import About from './components/About'
import Footer from './components/partials/Footer'
import BuddhismCover from './imgs/buddism-cover.jpg'
import FreudCover from './imgs/freud.jpg'
import infoPic from './imgs/about.JPG'
import './App.css'

const links = 
    ['home', 'buddhism and psychology', 'freud in china', 'papers', 'Events', 'about']
    .map(ele => ele.toLowerCase())

const pageLinks = links.map(link => '/' + link.replace(/ /g, "_"))

class App extends Component {

    getBooksColors = (data) => {
        const bookCoverColors = {}
        Object.keys(data).forEach(key => {
            const color = data[key].bookCoverColor
            if (color) {
                bookCoverColors[key] = color
            }
        })
        return bookCoverColors
    }

    render() {
        const data = JSON.parse(Data.getData()).data
        const booksColors = Data.getBooksColors()

        return (
            <div className='app'>
                <Header 
                    links = {links}
                    booksColors = {booksColors}
                />
                <Route exact path='/' render={() => (
                    <Home />
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
                    />
                )}/>
                <Route path={pageLinks[4]} render={() => (
                    <Events />
                )}/>
                <Route path={pageLinks[5]} render={() => (
                    <About
                        infoPic = {infoPic}
                    />
                )}/>
                <Footer />
            </div>
        )
    }
}

export default App;

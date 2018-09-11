import React, { Component } from 'react';

export default class Header extends Component {
    getLink = (link) => link !== 'home'? '/' + link.replace(/ /g,"_") : '/'

    getActivePageClassName = (page, link) => page !== link ? '' : 'active' 

    generateNavLinks = (links, activePage) => links.map((link, idx) => 
            <li className="nav-item" key={link} id={link}>
                <a href={this.getLink(link)} className={'nav-link ' + this.getActivePageClassName(activePage, link)}>{link}</a>
                { idx !== links.length -1 && <span className='link-seperator'>/</span>}
            </li>
    )

    render() {
        const {links, activePage} = this.props
        const navlinks = this.generateNavLinks(links, activePage)
        return (    
        <div className="header">
            <header>
                <h1 className="App-title"><a href='/'>Tao Jiang</a></h1>
                <ul className="nav">
                    {/* <li className="nav-item">
                        <a href="/" className="nav-link">Home</a>
                        <span className='link-seperator'>/</span>
                    </li>
                    <li className="nav-item">
                        <a href="/buddism_and_pasychology" className="nav-link active">Buddhism and Psychology</a>
                        <span className='link-seperator'>/</span>
                    </li>
                    <li className="nav-item">
                        <a href="/freud_in_china" className="nav-link">Freud in China</a>
                        <span className='link-seperator'>/</span>
                    </li>
                    <li className="nav-item">
                        <a href="/papers" className="nav-link">Papers</a>
                        <span className='link-seperator'>/</span>
                    </li>
                    <li className="nav-item">
                        <a href="/cv" className="nav-link">CV</a>
                        <span className='link-seperator'>/</span>
                    </li>
                    <li className="nav-item">
                        <a href="/about" className="nav-link">About</a>
                    </li> */}
                    {navlinks}
                </ul>
            </header>
        </div>
        );
    }
}
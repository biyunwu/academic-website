import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import Logo from './../../imgs/logo.png'

export default class Header extends Component {
    getLink = (link) => link !== 'home'? '/' + link.replace(/ /g, "_") : '/'

    getActivePageClassName = (link) => link !== window.location.pathname ? '' : 'active' 

    generateNavLinks = (links) => links.map((link, idx) => 
            <li className="nav-item" key={idx}>
                <Link
                    to={this.getLink(link)}
                    className={'nav-link ' + this.getActivePageClassName(this.getLink(link))}
                    id={link}
                >
                    {link}
                </Link>
                { idx !== links.length -1 && <span className='link-seperator'>|</span>}
            </li>
    )

    render() {
        const {links} = this.props
        const navlinks = this.generateNavLinks(links)
        return (    
            <div className="header">
                <header>
                    {/* <h1 className="App-title"><a href='/'>Tao Jiang</a>
                    </h1> */}
                    <a href='/'><img src={Logo} alt='logo' style={{maxHeight: '50px', display: 'inline-block'}}/></a>
                    <ul className="nav">
                        {navlinks}
                    </ul>
                </header>
            </div>
        )
    }
}
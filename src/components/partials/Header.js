import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'
import Logo from './../../imgs/logo.png'

export default class Header extends Component {

    generateNavLinks = (links, bookCoverColors) => links.map((link, idx) => 
            <li className="nav-item" key={idx}>
                <NavLink
                    to={this.getLink(link)}
                    // Only homepage use exact pathname
                    exact={idx===0 ? true : false}
                    className={'nav-link'}
                    activeClassName='active'
                    activeStyle={this.getLinkColor(link, bookCoverColors)}
                    id={link}
                >
                    {link}
                </NavLink>
                { idx !== links.length -1 && <span className='link-seperator'>|</span>}
            </li>
    )

    getLink = (link) => link !== 'home'? '/' + link.replace(/ /g, "_") : '/'

    getLinkColor = (link, bookCoverColors) => {
        for (const bookname in bookCoverColors) {
            if (link.includes(bookname)) {
                return {color: `${bookCoverColors[bookname]}`}
            }
        }
    }

    render() {
        const {links, bookCoverColors} = this.props
        const navlinks = this.generateNavLinks(links, bookCoverColors)
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
import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'

export default class NavLinks extends Component {

    generateNavLinks = (links, themeColors, isInSidebar) => links.map((link, idx) => 
        <li className={isInSidebar? 'sidebar-item': 'nav-item'} key={idx}>
            <NavLink
                to={this.getLink(link)}
                // Only homepage use exact pathname
                exact={idx===0 ? true : false}
                className={isInSidebar? 'sidebar-link' : 'nav-link'}
                activeClassName='active'
                activeStyle={this.getLinkColor(link, themeColors)}
                id={idx}
            >
                {link}
            </NavLink>
            { !isInSidebar && idx !== links.length -1 && <span className='link-seperator'>|</span>}
        </li>
    )

    getLink = (link) => link !== 'home'? '/' + link.replace(/ /g, "_") : '/'

    getLinkColor = (link, themeColors) => {
        for (const pagename in themeColors) {
            if (link.includes(pagename)) {
                return {color: `${themeColors[pagename]}`}
            }
        }
    }

    render() {
        const {links, themeColors, isInSidebar} = this.props
        const navlinks = this.generateNavLinks(links, themeColors, isInSidebar)
        return (    
            <ul className="nav">
                {navlinks}
            </ul>
        )
    }
}
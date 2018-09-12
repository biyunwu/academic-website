import React, { PureComponent } from 'react'
import { Link } from 'react-router-dom'

export default class Header extends PureComponent {
    getLink = (link) => link !== 'home'? link.replace(/ /g, "_") : ''

    getActivePageClassName = (pageName, link) => pageName !== link ? '' : 'active' 

    generateNavLinks = (links, activePage) => links.map((link, idx) => 
            <li className="nav-item" key={idx}>
                <Link
                    to={'/' + this.getLink(link)}
                    className={'nav-link ' + this.getActivePageClassName(activePage, link)}
                    id={link}
                    onClick={ evt => this.props.handleNavLinkClick(evt)}
                >
                    {link}
                </Link>
                { idx !== links.length -1 && <span className='link-seperator'>/</span>}
            </li>
    )

    render() {
        const {links, activePage} = this.props
        const navlinks = this.generateNavLinks(links, activePage)
        return (    
            <div className="header">
                <header>
                    <h1 className="App-title"><a href='/'>Tao Jiang</a>
                    </h1>
                    <ul className="nav">
                        {navlinks}
                    </ul>
                </header>
            </div>
        );
    }
}
import React, { PureComponent } from 'react';
import Header from './partials/Header';

export default class Home extends PureComponent {
    render () {
        const {links, activePage, handleNavLinkClick} = this.props
        return (
            <div>
                <Header 
                    links = {links}
                    activePage = {activePage}
                    handleNavLinkClick={handleNavLinkClick }
                />
            </div>
        )
    }
}
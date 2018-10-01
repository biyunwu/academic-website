import React, { Component } from 'react'
import Navlinks from './Navlinks'
import Logo from './../../imgs/logo.png'

export default class Header extends Component {
    render() {
        const {links, themeColors, isMobileDevice} = this.props
        const navlinks = isMobileDevice
            ? ''
            :   <Navlinks
                    links={links}
                    themeColors={themeColors}
                />

        return (    
            <header>
                <h1 style={{width: "100%", margin:'0'}}>
                    <a href='/' style={{verticalAlign: 'middle'}}>
                        <img src={Logo} alt='logo'/>
                    </a>
                </h1>
                {navlinks}
            </header>
        )
    }
}
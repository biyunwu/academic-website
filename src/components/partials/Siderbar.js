import React, { Component } from 'react'
import Navlinks from './Navlinks'

export default class Sidebar extends Component {
    render () {
        const {links, themeColors} = this.props
        return (
            <Navlinks
                links={links}
                themeColors={themeColors}
                isInSidebar = {true}
            />
        )
    }
}
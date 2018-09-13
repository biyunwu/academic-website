import React, { Component } from 'react'

export default class Header extends Component {
    render () {
        const year = (new Date()).getFullYear().toString()
        const copyright = <p>Copyright @ {year} <a className='taojiang'>Tao Jiang</a></p>
        return (
            <footer className='footer'>
                {/* <p>{'Copyright @ Tao Jiang ' + year}</p> */}
                {copyright}
                <p>Designed and Developed by Biyun Wu</p>
            </footer>
        )
    }
}
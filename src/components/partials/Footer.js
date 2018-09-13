import React, { Component } from 'react'

export default class Header extends Component {
    render () {
        const year = (new Date()).getFullYear().toString()
        return (
            <footer className='footer'>
                <p>{'Copyright @ Tao Jiang ' + year}</p>
                <p>Designed and Developed by Biyun Wu</p>
            </footer>
        )
    }
}
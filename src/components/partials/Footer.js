import React, { Component } from 'react'
// import LinkedIn from './../../imgs/linkedin.svg'

export default class Header extends Component {
    render () {
        const establishYear = 2018
        const currYear = (new Date()).getFullYear()
        const year = establishYear < currYear ? `${establishYear} - ${currYear}` : currYear.toString()
        const copyright = <p>© {year} <a className='taojiang'>Tao Jiang</a></p>
        return (
            <footer className='footer'>
                    {/* <p><a><img src={LinkedIn} alt='' style={{height: '20px', width: '20px'}}></img></a></p> */}
                    {copyright}
                    <p>Created by <a href='https://biyunwu.com' target='_blank' rel="noopener noreferrer">Biyun Wu</a></p>
            </footer>
        )
    }
}
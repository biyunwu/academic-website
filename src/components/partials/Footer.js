import React, { Component } from 'react'
import LinkedIn from './../../imgs/linkedin.png'
import Rutgers from './../../imgs/rutgers.png'
import GoogleScholar from './../../imgs/google-scholar.png'

export default class Header extends Component {
    render () {
        const establishYear = 2018
        const currYear = (new Date()).getFullYear()
        const year = establishYear < currYear ? `${establishYear} - ${currYear}` : currYear.toString()
        const copyright = <p>© {year} <span className='taojiang'>Tao Jiang</span></p>
        return (
            <footer className='footer'>
                    <a href='https://rccs.rutgers.edu/people/director' target='_blank' rel='noopener noreferrer'>
                        <img className='icon' src={Rutgers} alt='Rutgers' />
                    </a>
                    <span style={{display: 'inline-block', width: '10px'}}></span>
                    <a href='https://scholar.google.com/citations?user=BfEW4ggAAAAJ&hl=en&oi=ao' target='_blank' rel='noopener noreferrer'>
                        <img className='icon' src={GoogleScholar} alt='Google Scholar' />
                    </a>
                    <span style={{display: 'inline-block', width: '10px'}}></span>
                    <a href='https://www.linkedin.com/in/tao-jiang-bb80b837/' target='_blank' rel='noopener noreferrer'>
                        <img className='icon' src={LinkedIn} alt='LinkedIn' />
                    </a>
                    {copyright}
                    <p>Created by <a href='https://biyunwu.com' target='_blank' rel="noopener noreferrer">Biyun Wu</a></p>
            </footer>
        )
    }
}
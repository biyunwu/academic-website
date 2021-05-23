import React, { Component } from 'react'
// import LinkedIn from './../../imgs/linkedin.svg'
// import Rutgers from './../../imgs/rutgers.png'
// import GoogleScholar from './../../imgs/google-scholar.png'
// import Academia from './../../imgs/academia.png'
// import Email from './../../imgs/e-mail.svg'
// import Logo from './../../imgs/logo.png'

export default class Header extends Component {
    render () {
        // const {isMobileDevice} = this.props
        const establishYear = 2018
        const currYear = (new Date()).getFullYear()
        const year = establishYear < currYear ? `${establishYear} - ${currYear}` : currYear.toString()
        // const copyright = <p>© {year} <span className='taojiang'>Tao Jiang</span></p>
        const copyright = <p className='footer-text'>© {year} Tao Jiang</p>
        // const copyright = <p>© {year} <img src={Logo} alt='Logo of Tao Jiang' style={{display: 'inline-block', height: '1em'}}/></p>
        // return (
        //     <footer className='footer'>
        //             {/* <a href='https://scholar.google.com/citations?user=BfEW4ggAAAAJ&hl=en&oi=ao' target='_blank' rel='noopener noreferrer'>
        //                 <img className='icon' src={GoogleScholar} alt='Google Scholar' />
        //             </a>
        //             <span className='icon-gap'></span> */}
                    
        //             <a href='mailto:tjiang@rutgers.edu'>
        //                 <img className='icon' src={Email} alt='Click to send Email to Tao Jiang' />
        //             </a>
        //             {!isMobileDevice &&
        //                 <React.Fragment>
        //                     <span className='icon-gap'></span>
        //                     <a href='https://rccs.rutgers.edu/people/director' target='_blank' rel='noopener noreferrer'>
        //                         <img className='icon' src={Rutgers} alt='Rutgers' />
        //                     </a>
        //                     <span className='icon-gap'></span>
        //                     <a href='https://www.linkedin.com/in/tao-jiang-bb80b837/' target='_blank' rel='noopener noreferrer'>
        //                         <img className='icon' src={LinkedIn} alt='LinkedIn' />
        //                     </a>
        //                 </React.Fragment>
        //             }
        //             {copyright}
        //             <p className='footer-text'>Created by <a id='developer' href='https://biyunwu.com' target='_blank' rel="noopener noreferrer">Biyun Wu</a></p>
        //     </footer>
        // )

        return (
            <footer className='footer'>
                    <div>
                        <a href='mailto:tjiang@rutgers.edu'>
                            Email
                        </a>
                        <span className='icon-gap'/>
                        <a href='https://rccs.rutgers.edu/people/director' target='_blank' rel='noopener noreferrer'>
                            Rutgers
                        </a>
                        <span className='icon-gap'/>
                        <a href='https://www.linkedin.com/in/tao-jiang-bb80b837/' target='_blank' rel='noopener noreferrer'>
                            LinkedIn
                        </a>
                        <span className='icon-gap'/>
                        <a href='https://twitter.com/taojiangscholar' target='_blank' rel='noopener noreferrer'>
                            Twitter
                        </a>
                    </div>
                    {copyright}
                    <p className='footer-text'>Created by Biyun Wu</p>
            </footer>
        )
    }
}
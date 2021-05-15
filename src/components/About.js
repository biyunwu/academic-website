import React, { PureComponent } from 'react'
import ReactMarkdown from 'react-markdown'
import { Follow } from "react-twitter-widgets";
import {Helmet} from "react-helmet"

export default class About extends PureComponent {
    componentDidMount () {
        window.scrollTo(0,0)
    }

    // Helper method
    LinkRenderer = (props) => <a href={props.href} target="_blank" rel="noopener noreferrer">{props.children}</a>
    
    render () {
        const {infoPic, about} = this.props
        const {seoTitle, seoDescription} = about
        const {name, details} = about
        const detailsContent = details.map((detail, idx) => 
            <ReactMarkdown
                className='detail-info'
                key={`detail${idx}`}
                source={detail}
                renderers={{link: this.LinkRenderer}}
            />
        )

        return (
            <div id='maincontent-container'>
                <main className='about'>
                    <Helmet>
                        <title>{seoTitle}</title>
                        <meta name="description" content={seoDescription} />
                    </Helmet>
                    <div className='info'>
                        <h2>About {name}</h2>
                        <div className='pic-container'>
                            <img className='info-pic' src={infoPic} alt={name} />
                        </div>
                        <div>
                            {detailsContent}
                        </div>
                        <div className='clear'></div>
                        {/* <div className='clear'></div> */}
                    </div>
                    <div className='contact'>
                        <h2>Contact Info</h2>
                        <address>
                            <p>Rutgers University</p>
                            <p>64 College Ave<br/>New Brunswick<br/>NJ 08901<br/>United States</p>
                            <p><a href='mailto:tjiang@rutgers.edu'>tjiang@rutgers.edu</a></p>
                            <Follow username="TaoJiangScholar" options={{ dnt: true}} />
                        </address>
                    </div>
                </main>
            </div>
        )
    }
}
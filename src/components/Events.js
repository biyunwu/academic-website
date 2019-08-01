import React, { PureComponent } from 'react'
import ReactMarkdown from 'react-markdown'
import {Helmet} from "react-helmet"
import LocationIcon from './../imgs/location.svg'

export default class Events extends PureComponent {

    // state = {
    //     videoToShowIdx: undefined
    // }

    componentDidMount () {
        window.scrollTo(0,0)
    }

    generateEventDetail = (event, idx) => 
        <div className='event-container' key={event.location}>
            <h3 className='subject'>{event.subject}</h3>
            <div className='event-detail'>
                <p className='location'>
                    <img className='location-icon' src={LocationIcon} alt='location'/>
                    {event.location}
                </p>
                <ReactMarkdown
                    className='introduction'
                    source={event.introduction}
                    renderers={{link: this.LinkRenderer}}
                    // linkTarget = '_blank'
                />
                {event.videoLink &&
                    <div>
                        {/* {this.state.videoToShowIdx === idx && */}
                            <div className='video-container'>
                                <div dangerouslySetInnerHTML={{ __html: event.videoLink }}></div>
                                {/* <video controls>
                                    <source src={event.videoLink} type="video/mp4" />
                                    <p>Your browser doesn't support HTML5 video.</p>
                                </video> */}
                            </div>       
                        {/* } */}
                        {/* <button className='video-button' onClick={e => this.updateVideoToShowidx(idx)}>{this.state.videoToShowIdx !== idx? 'Watch Video' : 'Hide Video'}</button> */}
                    </div>
                }
            </div>
        </div>
        
    LinkRenderer = (props) => <a href={props.href} target="_blank" rel="noopener noreferrer">{props.children}</a>

    updateVideoToShowidx = (buttonIdx) => {
        buttonIdx === this.state.videoToShowIdx
        ? this.setState({videoToShowIdx: undefined})
        : this.setState({videoToShowIdx: buttonIdx})
    }

    render () {
        const {seoTitle, seoDescription, academic, pub_2, pub_1} = this.props.events
        const allEvents = academic.concat(pub_2).concat(pub_1)
        // const allEvents = academic.concat(pub)
        // const academicEvents = academic.map((event, idx) => this.generateEventDetail(event, idx))
        // const publicEvents = pub.map((event, idx) => this.generateEventDetail(event, idx))
        const allEventsDetails = allEvents.map((event, idx) => this.generateEventDetail(event, idx))
        return (
            <div id='maincontent-container'>
                <main id='events'>
                    <Helmet>
                        <title>{seoTitle}</title>
                        <meta name="description" content={seoDescription} />
                    </Helmet>
                    <h2>Some Events</h2>
                    {/* {academicEvents}
                    {publicEvents} */}
                    {allEventsDetails}
                </main>
            </div>
        )
    }
}
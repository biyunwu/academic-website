import React, { PureComponent } from 'react'
import ReactMarkdown from 'react-markdown'
import LocationIcon from './../imgs/location.svg'

export default class Events extends PureComponent {

    generateEventDetail = (event) => 
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
                <div className='video-container'>
                    {event.videoLink &&
                        <video controls>
                            <source src={event.videoLink} type="video/mp4" />
                            <p>Your browser doesn't support HTML5 video.</p>
                        </video>
                    }
                </div>             
            </div>
        </div>
        

    LinkRenderer = (props) => <a href={props.href} target="_blank" rel="noopener noreferrer">{props.children}</a>

    render () {
        const {academic, pub} = this.props.events
        const academicEvents = academic.map(event => this.generateEventDetail(event))
        const publicEvents = pub.map(event => this.generateEventDetail(event))
        return (
            <main id='events'>
                <h2>A Few Events</h2>
                {academicEvents}
                {publicEvents}
            </main>
        )
    }
}
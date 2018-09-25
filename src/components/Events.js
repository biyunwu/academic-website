import React, { PureComponent } from 'react'
import ReactMarkdown from 'react-markdown'

export default class Events extends PureComponent {

    generateEventDetail = (event) => 
        <li key={event.location}>
            <ReactMarkdown
                source={event.introduction}
                renderers={{link: this.LinkRenderer}}
                // linkTarget = '_blank'
            />
            {event.videoLink &&
                <video controls>
                    <source src={event.videoLink} type="video/mp4" />
                    <p>Your browser doesn't support HTML5 video.</p>
                </video>
            }
        </li>

    LinkRenderer = (props) => <a href={props.href} target="_blank" rel="noopener noreferrer">{props.children}</a>

    render () {
        const {academic, pub} = this.props.events
        const academicEvents = academic.map(event => this.generateEventDetail(event))
        const publicEvents = pub.map(event => this.generateEventDetail(event))
        return (
            <main id='events'>
                <h2>A Few Events</h2>
                <ul>
                    {academicEvents}
                    {publicEvents}
                </ul>
            </main>
        )
    }
}
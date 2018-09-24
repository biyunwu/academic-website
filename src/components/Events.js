import React, { PureComponent } from 'react'

export default class Events extends PureComponent {

    generateEventDetail = (event) => 
        <li key={event.location}>
            {event.introduction}
            {event.videoLink &&
                <video controls>
                    <source src={event.videoLink} type="video/mp4" />
                    <p>Your browser doesn't support HTML5 video.</p>
                </video>
            }
        </li>

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
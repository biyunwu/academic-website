import React, { PureComponent } from 'react'
import Moral from './../video/moral.mp4'

export default class Events extends PureComponent {
    render () {
        return (
            <main id='events'>
                <video controls>
                    <source src={Moral} type="video/mp4" />
                    <p>Your browser doesn't support HTML5 video.</p>
                </video>
            </main>
        )
    }
}
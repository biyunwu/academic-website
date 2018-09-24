import React, { PureComponent } from 'react'
const filePath = 'https://media.githubusercontent.com/media/biyunwu/academic-web/master/src/data/video/moral.mp4'

export default class Events extends PureComponent {
    render () {
        return (
            <main id='events'>
                <video controls>
                    <source src={filePath} type="video/mp4" />
                    <p>Your browser doesn't support HTML5 video.</p>
                </video>
            </main>
        )
    }
}
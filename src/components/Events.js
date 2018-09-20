import React, { PureComponent } from 'react';

export default class Events extends PureComponent {
    render () {
        return (
            <main id='events'>
                <iframe
                    title='Video of the event'
                    src="https://www.youtube.com/embed/IefIdc4ms0o?rel=0&amp;showinfo=0"
                    frameborder="0"
                    allow="autoplay; encrypted-media"
                    allowFullScreen={true}
                >
                </iframe>
            </main>
        )
    }
}
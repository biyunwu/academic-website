import React, { PureComponent } from 'react';

export default class Papers extends PureComponent {
    render () {
        const {papers} = this.props
        return (
            <main id='papers-div'>
                <h2>Selected Papers</h2>
                <ul>
                    {papers.map((paper, idx) => 
                        <li key={idx}>{paper}</li>
                    )}
                </ul>
            </main>
        )
    }
}
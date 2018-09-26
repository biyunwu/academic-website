import React, { PureComponent } from 'react'
// import BackgroundImage from './../imgs/tj.jpg'

export default class Home extends PureComponent {
    render () {
        const {backgroundImage} = this.props

        return (
            <main
                id='background-image'
                style={{backgroundImage: `url("${backgroundImage}")`}}
                // style={{backgroundImage: `url(${BackgroundImage})`}}
                // style={{backgroundImage: `url('https://raw.githubusercontent.com/biyunwu/academic-website/master/src/imgs/tj.jpg')`}}
            >
                <p style={{visibility: 'hidden'}}>Background image</p>
            </main>
        )
    }
}
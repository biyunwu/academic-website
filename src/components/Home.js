import React, { PureComponent } from 'react'
import {Helmet} from "react-helmet"

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
                <Helmet>
                    <title>Tao Jiang</title>
                    <meta name="description" content="Tao JIANG is a scholar of classical Chinese philosophy, Mahāyāna Buddhist philosophy, and comparative philosophy at Rutgers University. Jiang's approach to philosophy is to treat it as a way to study a particular form of intellectual culture and the people who conceive of it." />
                </Helmet>
            </main>
        )
    }
}
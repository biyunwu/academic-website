import React, { PureComponent } from 'react'
import BackgroundImage from './../imgs/tj.jpg'

export default class Home extends PureComponent {
    // state = {
    //     // For background img's contianer in Home page
    //     height: 0
    // }

    // componentDidMount () {
    //     this.updateImageHeight()
    //     window.addEventListener('resize', this.updateImageHeight)
    // }

    // componentWillUnmount () {
    //     // Avoid memory leak
    //     window.removeEventListener('resize', this.updateImageHeight)
    // }

    // updateImageHeight = () => {
    //     const headerAndFooterHeight = 279
    //     let height = window.innerHeight - headerAndFooterHeight
    //     // Smallest height: 200. Prevent the image from being disppeared.
    //     height =  height >= 200 ? height : 200
    //     this.setState({height})
    // }

    render () {
        return (
            <main id='background-image' style={{backgroundImage: `url(${BackgroundImage})`}}>
            </main>
        )
    }
}
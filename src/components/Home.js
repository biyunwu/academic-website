import React, { PureComponent } from 'react'

export default class Home extends PureComponent {
    state = {
        height: 0
    }

    componentDidMount () {
        this.updateImageHeight()
        window.addEventListener('resize', this.updateImageHeight)
    }

    componentWillUnmount () {
        // Avoid memory leak
        window.removeEventListener('resize', this.updateImageHeight)
    }

    updateImageHeight = () => {
        const headerAndFooterHeight = 248
        let height = window.innerHeight - headerAndFooterHeight
        // Smallest height: 200. Prevent the image from being disppeared.
        height =  height >= 200 ? height : 200
        this.setState({height})
    }

    render () {
        return (
            <div id='background-image' style={{height: this.state.height}}>
            </div>
        )
    }
}
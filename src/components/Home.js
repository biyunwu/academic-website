import React, { PureComponent } from 'react'
import TJ from './../imgs/tj.jpg'

export default class Home extends PureComponent {
    render () {
        return (
            <div style={{textAlign: 'center'}}>
                <img src={TJ} alt='Tao Jiang' style={{width: '100%'}}/>
            </div>
        )
    }
}
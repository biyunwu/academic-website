import React, { PureComponent } from 'react';

export default class About extends PureComponent {
    render () {
        const {infoPic} = this.props
        return (
            <main className='about'>
                <div className='info'>
                    <h2>About Tao Jiang</h2>
                    <img className='info-pic' src={infoPic} alt='Tao Jiang' />
                    <p>lskdjfhlaksdhjflaksdhjflaksjhdflkasjhdflak</p>
                </div>
            </main>
        )
    }
}
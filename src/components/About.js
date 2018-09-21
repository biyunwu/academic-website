import React, { PureComponent } from 'react';

export default class About extends PureComponent {
    render () {
        const {infoPic} = this.props
        return (
            <main className='about'>
                <div className='info'>
                    {/* <h2>Tao Jiang</h2> */}
                    <img className='info-pic' src={infoPic} alt='Tao Jiang' />
                    <div>
                        <p className='detail-info'>
                            Tao Jiang is associate professor in the <a target='_blank' rel="noopener noreferrer" href='https://religion.rutgers.edu/graduate/graduate-faculty/892-tao-jiang-4'>Religion Department</a> at Rutgers University, New Brunswick, New Jersey, US, where he is also serving as director of the <a target='_blank' rel="noopener noreferrer" href='https://rccs.rutgers.edu/'>Rutgers Center for Chinese Studies</a>. His primary research interest is classical Chinese philosophy, Mahāyāna Buddhist philosophy, and comparative philosophy. He is the author of Contexts and Dialogue: Yogācāra Buddhism and Modern Psychology on the Subliminal Mind and the co-editor of The Reception and Rendition of Freud in China: China’s Freudian Slip. His articles have appeared in Philosophy East & West, Journal of the American Academy of Religion, Journal of Chinese Philosophy, Journal of Indian Philosophy, Dao and several anthologies. He co-directs the Rutgers Workshop on Chinese Philosophy and co-chairs the Neo-Confucian Studies Seminar at Columbia University.
                        </p>
                    </div>
                    <div className='clear'></div>
                </div>
            </main>
        )
    }
}
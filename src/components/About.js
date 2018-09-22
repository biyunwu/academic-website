import React, { PureComponent } from 'react';

export default class About extends PureComponent {
    render () {
        const {infoPic} = this.props
        return (
            <main className='about'>
                <div className='info'>
                    <h2>About Tao Jiang</h2>
                    <div className='pic-container'>
                        <img className='info-pic' src={infoPic} alt='Tao Jiang' />
                    </div>
                    <div>
                        <p className='detail-info'>
                            Tao J<span id='lastname'>IANG</span> is a scholar of classical Chinese philosophy, Mahāyāna Buddhist philosophy, and comparative philosophy. He is associate professor in the <a target='_blank' rel="noopener noreferrer" href='https://religion.rutgers.edu/graduate/graduate-faculty/892-tao-jiang-4'>Department of Religion</a> and an associate member of the graduate faculty in the Department of Philosophy at Rutgers, the State University of New Jersey in New Brunswick, US. He is director of the multidisciplinary <a target='_blank' rel="noopener noreferrer" href='https://rccs.rutgers.edu/'>Rutgers Center for Chinese Studies</a>.
                        </p>
                        <p className='detail-info'>
                            Jiang is the author of <span className='italic'>Contexts and Dialogue: Yogācāra Buddhism and Modern Psychology on the Subliminal Mind</span> and the co-editor of <span className='italic'>The Reception and Rendition of Freud in China: China’s Freudian Slip</span>. His articles have appeared in <span className='italic'>Philosophy East & West</span>, <span className='italic'>Journal of the American Academy of Religion</span>, <span className='italic'>Journal of Chinese Philosophy</span>, <span className='italic'>Journal of Indian Philosophy</span>, <span className='italic'>Dao</span> and several anthologies. Currently he is finishing a monograph on classical Chinese philosophy.
                        </p>
                        <p className='detail-info'>
                            Jiang co-directs the Rutgers Workshop on Chinese Philosophy and co-chairs the Neo-Confucian Studies Seminar at Columbia University. He is currently serving on the program committee of the American Academy of Religion.
                        </p>
                    </div>
                    <div className='clear'></div>
                    {/* <div className='clear'></div> */}
                </div>
                <div className='contact'>
                    <h2>Contact Info</h2>
                    <address>
                        <p>Rutgers University</p>
                        <p>70 Lipman Drive<br/>Loree Hall<br/>Room 140<br/>New Brunswick<br/>NJ 08901-8525</p>
                        <p><a href='mailto:tjiang@rutgers.edu'>tjiang@rutgers.edu</a></p>
                    </address>
                </div>
            </main>
        )
    }
}
import React, { PureComponent } from 'react'

// const tagColors = ['rgb(150, 41, 49)', '#81d8d0', 'rgb(31, 33, 70)']
// const tagColors = ['#F05654', '#81d8d0', 'rgb(31, 33, 70)']
// const tagColors = ['#FF4C00', 'rgb(240, 157, 56)','#81d8d0']
// const tagColors = ['#FF3300', 'rgb(240, 157, 56)','#81d8d0']
// const tagColors = ['#DC3023', 'rgb(240, 157, 56)','#81d8d0']
const tagColors = ['#DC3023', 'rgb(240, 157, 56)','rgb(0, 216, 208)']

export default class Papers extends PureComponent {
    generatePaperInfo = (title, tags, idx) => {
        return (
            <li key={idx}>
                <div className='tag-container'>
                    {this.getTags(tags)}    
                </div>
                <p>{title}</p>
            </li>
        )
    }

    getTags = (tags, classname) =>
        tags.length > 1
        ? tags.map((num, idx) => <span className='tag' style={{color: tagColors[num]}} key={classname || idx}>■</span>)
        : <span className='tag' style={{color: tagColors[tags]}}>■</span>

    getTagButton = (category, idx) => 
        <div className='tag-button-container' key={category}>
            <button id={'color'+idx} key={'color'+idx}
                style={{backgroundColor: tagColors[idx]}}
                // onMouseEnter={e => e.target.style.background=`${tagColors[idx]}`}
                // onMouseLeave={e => e.target.style.background='white'}
            >
                {/* <span style={{color: tagColors[idx]}}>■</span> */}
                {category}
            </button>
        </div>

    render () {
        const {categories, items} = this.props.papers
        const tagButtons = categories.map((category, idx) => this.getTagButton(category, idx))
        const paperTitles = items.map((item, idx) => this.generatePaperInfo(item.title, item.tags, idx))

        return (
            <main id='papers-div'>
                <h2>A Few Papers</h2>
                <div className='options'>
                    {tagButtons}
                </div>
                <ul>
                    {paperTitles}
                </ul>
            </main>
        )
    }
}
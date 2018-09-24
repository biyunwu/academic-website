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
                <p>
                    {title}
                    <span className='tag-container'>
                        {this.getTags(tags)}    
                    </span>
                </p>
            </li>
        )
    }

    getTags = (tags, classname) =>
        tags.length > 1
        ? tags.map((num, idx) => <span className='tag' style={{color: tagColors[num]}} key={classname || idx}>■</span>)
        : <span className='tag' style={{color: tagColors[tags]}}>■</span>

    getTagLabel = (category, idx) => 
        <div className='tag-button-container' key={category}>
            <div id={'color'+idx} key={'color'+idx}
                style={{backgroundColor: tagColors[idx]}}
                // onMouseEnter={e => e.target.style.background=`${tagColors[idx]}`}
                // onMouseLeave={e => e.target.style.background='white'}
            >
                {category}
            </div>
        </div>

    render () {
        const {categories, items} = this.props.papers
        const tagLabels = categories.map((category, idx) => this.getTagLabel(category, idx))
        const paperTitles = items.map((item, idx) => this.generatePaperInfo(item.title, item.tags, idx))

        return (
            <main id='papers-div'>
                <h2>A Few Papers</h2>
                <div className='options'>
                    {tagLabels}
                </div>
                <ul>
                    {paperTitles}
                </ul>
            </main>
        )
    }
}
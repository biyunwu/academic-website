import React, { PureComponent } from 'react';

export default class Papers extends PureComponent {
    generatePaperInfo = (title, tag, idx, categories) => {
        return (
            <li key={idx}>
                <p>{title}</p>
                {this.getTags(tag, categories)}
            </li>
        )
    }

    getTags = (tag, categories) =>
        tag.length > 1
        ? tag.map(num => <button>{categories[num]}</button>)
        : <button>{categories[tag]}</button>
    

    render () {
        const {tags, items} = this.props.papers
        console.log(tags, items);
        return (
            <main id='papers-div'>
                <h2>A Few Papers</h2>
                <ul>
                    {items.map((item, idx) => this.generatePaperInfo(item.title, item.tag, idx, tags))}
                </ul>
            </main>
        )
    }
}
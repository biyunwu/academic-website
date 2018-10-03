import React, { PureComponent } from 'react'
import ReactMarkdown from 'react-markdown'
import {Helmet} from "react-helmet"
import Download from './../imgs/download.svg'

const tagColors = ['#DC3023', 'rgb(240, 157, 56)','rgb(0, 216, 208)']
const hostPath = 'https://raw.github.com/biyunwu/academic-web/master/src/data/papers/'

export default class Papers extends PureComponent {

    state = {
        isMobileDevice : true
    }

    componentDidMount () {
        window.scrollTo(0,0)
    }

    // Update state according to parent props
    static getDerivedStateFromProps(nextProps, prevState) {
        if((nextProps.viewportWidth <= nextProps.maxMobileWidth) !== prevState.isMobileDevice) {
            return { isMobileDevice: !prevState.isMobileDevice };
        }
        return null;
    }

    generatePaperInfo = (title, tags, pathname, idx) => {
        return (
            <li key={idx}>
                <ReactMarkdown
                    source={title}
                />
                <div className='indent'>
                    <a href={hostPath + pathname} target='_blank' rel='noopener noreferrer'>
                        <img className='download-icon' src={Download} alt='Click to download'/>
                    </a>
                    <span className='tag-container'>
                        {this.getTags(tags)}    
                    </span>
                </div>
            </li>
        )
    }

    getTags = (tags, classname) =>
        tags.length > 1
        ? tags.map((num, idx) => <span className='tag' style={{background: tagColors[num]}} key={classname || idx}></span>)
        : <span className='tag' style={{background: tagColors[tags]}}></span>

    getTagLabel = (category, idx) => 
        <div className='tag-label-container' key={category}>
            <div id={'color'+idx} className='label' key={'color'+idx}
                style={{backgroundColor: tagColors[idx]}}
            >
                {category}
            </div>
        </div>

    render () {
        const {seoTitle, seoDescription, categories, shortCategories, items} = this.props.papers
        const {viewportWidth} = this.props
        const widthLimiter = 780
        const tagLabels = this.state.isMobileDevice
            ? shortCategories.map((category, idx) => this.getTagLabel(category, idx))
            : categories.map((category, idx) => this.getTagLabel(category, idx))
        const papers = items.map((item, idx) => this.generatePaperInfo(item.title, item.tags, item.pathname, idx))

        return (
            <main id='papers-div'>
                <Helmet>
                    <title>{seoTitle}</title>
                    <meta name="description" content={seoDescription} />
                </Helmet>
                {
                    viewportWidth >= widthLimiter &&
                    <div className='options'>
                        <h2>Categories</h2>
                        <div className='sticky'>
                            {tagLabels}
                        </div>
                    </div>
                }
                <div className='papers'>
                    <h2>A Few Papers</h2>
                    {
                        viewportWidth < widthLimiter &&
                        <div className='options'>
                            <div className='sticky'>
                                {tagLabels}
                            </div>
                        </div>
                    }
                    <ul>
                        {papers}
                    </ul>
                </div>
            </main>
        )
    }
}
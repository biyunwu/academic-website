import React from 'react';
import Pdf from './partials/Pdf'
import PdfNav from './partials/PdfNav'
import throttle from "lodash.throttle"
// import Icon from 'antd'
// import 'antd/lib/icon/style/index.less'

// const chapters = [
//     "Introduction",
//     "Chapter 1: The Origin of the Concept of Ālayavijñāna",
//     "Chapter 2: Ālayavijñāna in the Cheng Weishi Lun: A Buddhist Theory of the Subliminal Mind",
//     "Chapter 3: The Unconscious: Freud and Jung",
//     "Chapter 4: Three Paradigms of the Subliminal Mind: Xuan Zang, Freud, and Jung",
//     "Chapter 5: Accessibility of the Subliminal Mind: Transcendence versus Immanence",
//     "Conclusion: An Emerging New World as a New Context",
//     "Notes and Index"
// ]
// const title = 'Contexts and Dialogue: Yogācāra Buddhism and Modern Psychology on the Subliminal Mind'

export default class PdfViewer extends React.Component {
    state = {
        chapters: null,
        authors: null,
        chapter: undefined,
        data: null,
        currChapterData: null,
        hasError: false,
        width: null,
        isTextLayerEnable: false
    }
    
    componentDidMount () {
        this.setDivSize()
        window.addEventListener("resize", throttle(this.setDivSize, 300))
        fetch(`https://freud-viewer.herokuapp.com/${this.props.readKey}`)
        .then(
            response => {
                if (response.status !== 200) {
                    console.log('Looks like there was a problem. Status Code: ' +
                    response.status)
                    return
                }
                // Examine the text in the response
                response.json().then((data) => {
                    const decodedData = []
                    const chapters = []
                    const authors = []
                    const basename = `JVBERi0xLj`
                    // this.state.chapters.forEach((c, idx) => {
                    //     const base64 = basename + data[idx].content
                    //     decodedData.push(this.base64ToArrayBuffer(base64))
                    // })
                    data.forEach((d, idx) => {
                        const base64 = basename + data[idx].content
                        decodedData.push(this.base64ToArrayBuffer(base64))
                        chapters.push(d.title)
                        const author = d.author
                        author ? authors.push(author) : authors.push(undefined)
                    })
                    return [decodedData, chapters, authors]
                }).then(dataArr => this.setState({data: dataArr[0], chapters: dataArr[1], authors: dataArr[2]}))
            })
        .catch(err => {
            this.setState({hasError: true})
            console.log('Fetch Error :-S', err);
        });
    }

    componentWillUnmount () {
        window.removeEventListener("resize", throttle(this.setDivSize, 300))
    }

    setDivSize = () => {
        this.setState({width: this.pdfWrapper.getBoundingClientRect().width})
    }

    handleChapterChange = (chapter) => {
        const data = this.state.data
        if (data){
            this.setState({chapter: chapter, currChapterData: data[chapter]})
        } 
    }

    toggleTextLayer = () => {
        this.setState({isTextLayerEnable: !this.state.isTextLayerEnable})
    }

    base64ToArrayBuffer = (base64) => {
        const raw =  window.atob(base64);
        const rawLength = raw.length;
        const array = new Uint8Array(new ArrayBuffer(rawLength));
        for (let i = 0; i < rawLength; i++){
            array[i] = raw.charCodeAt(i);
        }
        return array;
    }

    render() {
        const { data, chapter, currChapterData, chapters, authors, hasError, width, isTextLayerEnable} = this.state
        const { title } = this.props
        const reminderStyle = {
            position: 'absolute',
            top: '50%',
            left: '50%',
            marginRight: '-50%',
            transform: 'translate(-50%, -50%)',
            color: "grey",
            fontFamily: "SF Pro Text Light"
        }
        return (
            <div id='maincontent-container'>
                <main className="pdf-container" id="pdfWrapper" ref={(ref) => this.pdfWrapper = ref}>
                    <h2>{title}</h2>
                    {
                        chapters &&
                        <div id='switch-container'>
                            <button id="toggle-switch"
                                onClick={this.toggleTextLayer}
                            >
                                {isTextLayerEnable? 'Diable Text Layer' : 'Enable Text Layer'}
                            </button>
                        </div>
                    }
                    {
                        chapters &&
                        <PdfNav
                            chapter={chapter}
                            chapters={chapters}
                            authors = {authors}
                            handleChapterChange={this.handleChapterChange}
                        />
                    }
                    {
                        data
                        ? 
                        <div className="pdf" id="pdf">
                            <Pdf
                                chapter={chapter}
                                data={currChapterData}
                                width={width}
                                isTextLayerEnable={isTextLayerEnable}
                            />
                            {/* {chapter > 0 && <a>Previous</a>}
                            {chapter < chapters.length - 1 && <a>Next</a>} */}
                        </div>
                        :
                        <div style={reminderStyle}>
                            {hasError ? 'Communication failed.' : 'Fetching Data...'}
                            {/* <Icon type="loading" /> */}
                        </div>
                    }
                </main>
            </div>
        )
    }
}
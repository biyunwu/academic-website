import React from 'react';
import Pdf from './partials/Pdf'
import PdfNav from './partials/PdfNav'

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
        isTocShown: true,
        chapters: this.props.chapters,
        chapter: undefined,
        data: null,
        currChapterData: null
    }

    componentDidMount () {
        fetch(`https://freud-viewer.herokuapp.com/${this.props.readKey}`)
        .then(
            response => {
                if (response.status !== 200) {
                    console.log('Looks like there was a problem. Status Code: ' +
                    response.status);
                    return;
                }
                // Examine the text in the response
                response.json().then((data) => {
                    const decodedData = [];
                    const basename = `JVBERi0xLj`
                    this.state.chapters.forEach((c, idx) => {
                        const base64 = basename + data[idx].content
                        decodedData.push(this.base64ToArrayBuffer(base64))
                    })
                    // console.log("Decoded Data: ", decodedData)
                    // console.log(this);
                    return decodedData
                    // this.setState({data: decodedData})
                }).then(data => this.setState({data: data}))
            })
        .catch(function(err) {
            console.log('Fetch Error :-S', err);
        });
    }

    updateSidebarStatus = () => {
        this.setState(prevState => ({isTocShown: !prevState.isTocShown}))
    }

    handleChapterChange = (chapter) => {
        const data = this.state.data
        if (data){
            this.setState({chapter: chapter, currChapterData: data[chapter]})
        } 
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
        const { isTocShown, data, chapter, currChapterData } = this.state
        const { title, chapters } = this.props
        const reminderStyle = {textAlign: "center", color: "grey", margin:"0 1rem", paddingTop: "5rem", fontFamily: "SF Pro Text Light"}
        return (
            <div id='maincontent-container' className="pdf-container" style={currChapterData && {minWidth: "892px"}}>
                <PdfNav
                    isTocShown={isTocShown}
                    title={title}
                    chapters={chapters}
                    updateSidebarStatus={this.updateSidebarStatus}
                    handleChapterChange={this.handleChapterChange}
                />
                {
                    data
                    ? 
                    <div className="pdf" style={{width: "892px"}}>
                        <Pdf
                            chapter={chapter}
                            data={currChapterData}
                            isTocShown={isTocShown}
                        />
                        {/* {chapter > 0 && <a>Previous</a>}
                        {chapter < chapters.length - 1 && <a>Next</a>} */}
                    </div>
                    : 
                    <div style={reminderStyle}>Fetching Data</div>
                }
                {
                    data && !(chapter >=0)  &&
                    <div style={reminderStyle}>
                        <div>Choose a chapter to Read.</div>
                        <div>The PDF may take several seconds to be displayed.</div>
                        <div>For a better layout, please use laptop or desktop to open this page.</div> 
                    </div>
                }
            </div>
        )
    }
}
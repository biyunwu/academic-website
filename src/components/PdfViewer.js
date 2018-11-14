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
                    console.log("Decoded Data: ", decodedData)
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
        const { isTocShown, chapter, currChapterData } = this.state
        const { title, chapters } = this.props
        console.log("Chapter: ", chapter)
        return (
            <div id='maincontent-container' style={{margin: "0 auto"}}>
                <PdfNav
                    isTocShown={isTocShown}
                    title={title}
                    chapters={chapters}
                    updateSidebarStatus={this.updateSidebarStatus}
                    handleChapterChange={this.handleChapterChange}
                />
                <Pdf
                    chapter={chapter}
                    data={currChapterData}
                    isTocShown={isTocShown}
                />
                {/* {!currChapterData &&
                    <div style={{height: "100%", width: "100%", paddingTop: "40vh"}}>
                        <h2 style={{textAlign: "center"}}>Select chapters from the menu icon at the top left corner.</h2>
                    </div>
                } */}
            </div>
        )
    }
}
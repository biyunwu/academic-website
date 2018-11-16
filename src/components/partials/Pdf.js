import React, { Component } from 'react'
import { Page } from 'react-pdf'
import { Document } from 'react-pdf/dist/entry.webpack'

export default class Pdf extends Component {
    state = {
        scale: 1.5,
        numPages: null,
        // pageNumber: 1,
        // chapter: this.props.chapter,
        // data: null
        // data: this.props.data
    }

    // componentDidMount () {
    //     // if (this.props.chapter !== this.state.chapter){
    //     //     this.setState({chapter: this.props.chapter})
    //     // }
    //     const chapter = this.state.chapter
    //     if (chapter >= 0 ) {
    //         const basename = `JVBERi0xLj`
    //         fetch(`https://freud-viewer.herokuapp.com/freud/${chapter}`)
    //         .then(
    //                 (response) => {
    //                 if (response.status !== 200) {
    //                     console.log('Looks like there was a problem. Status Code: ' +
    //                     response.status);
    //                     return;
    //                 }
    //                 // Examine the text in the response
    //                 response.json().then((data) => {
    //                     const base64 = basename + data.content;
    //                     // console.log(data);
    //                     this.setState({data: this.base64ToArrayBuffer(base64)})
    //                 });
    //             }
    //         )
    //         .catch(function(err) {
    //             console.log('Fetch Error :-S', err);
    //         });
    //     }
    // }

    // componentWillReceiveProps(nextProps) {
    //     if(nextProps.chapter !== this.props.chapter) {
    //         this.setState({chapter: nextProps.chapter})
    //     }
    // }

    // base64ToArrayBuffer = (base64) => {
    //     const raw =  window.atob(base64);
    //     const rawLength = raw.length;
    //     const array = new Uint8Array(new ArrayBuffer(rawLength));
    //     for (let i = 0; i < rawLength; i++){
    //         array[i] = raw.charCodeAt(i);
    //     }
    //     return array;
    // }

    onDocumentLoadSuccess = ({ numPages }) => {
        this.setState({ numPages });
    }

    // getAllPageComponents = (numPages) => {
    //     const pages = []
    //     for (let i=1; i<=numPages; i++) {
    //         pages.push(<Page pageNumber={i} />)
    //     }
    //     return pages
    // }

    render() {
        const { scale, numPages } = this.state;
        const { data } = this.props;
        // console.log(viewportWidth)
        // Prevent content form scolling when menu bar is open.
        // this.props.isTocShown
        //     ? document.getElementsByTagName("body")[0].style.overflow = "hidden"
        //     : document.getElementsByTagName("body")[0].style.overflow = ""
        return (
            data &&
            <div>
                <Document
                    className='pdf-canvas'
                    file={{data: data}}
                    onLoadSuccess={this.onDocumentLoadSuccess}
                    // loading='Loading... Please wait.'
                >
                    {/* Convert numPages to array which has elements from 1 to numPages */
                        Array.apply(null, Array(numPages)).map(function (_, i) {return i+1}).map(num => 
                        <Page
                            key={num}
                            pageNumber={num}
                            scale={scale}
                            loading='Loading... Please wait.'
                        />)
                    }
                </Document>
            </div>
        )
    }
}

// import React from 'react';
// import { Document, Page } from 'react-pdf';

// const pdfjs = require('pdfjs-dist/build/pdf.min.js');

// pdfjs.PDFJS.workerSrc = '../src/assets/pdf.worker.min.js';
// pdfjs.PDFJS.cMapUrl = '../src/assets/cmaps/';
// pdfjs.PDFJS.cMapPacked = true;

// export default class App extends React.Component {
//     state = {
//         numPages: null,
//         pageIndex: null,
//         binaryPDFContent: this.props.data,
//     }

//     componentDidMount() {
//         this.PDFWidth = 400;
//         document.getElementById('pdfContainer').addEventListener('wheel', this.onScrollPDF.bind(this));
//     }

//     componentWillUnmount() {
//         document.getElementById('pdfContainer').removeEventListener('wheel', this.onScrollPDF.bind(this));
//     }
    
//     onDocumentLoadSuccess(nPages) {
//         if (this.state.pageIndex==null) {
//         this.setState({
//             numPages: nPages,
//             pageIndex: 0,
//         });
//         } else if (this.state.pageIndex > nPages) {
//         this.setState({
//             numPages: nPages,
//             pageIndex: nPages-1,
//         })
//         } else {
//         this.setState({
//             numPages: nPages,
//         });
//         }
//     }

//     onScrollPDF(event) {
//         let delta = null;
//         if (event.wheelDelta) {
//         delta = event.wheelDelta;
//         } else {
//         delta = -1 * event.deltaY;
//         }
//     //  This is where some customization can happen
//         if (delta < -20) {
//         this.nextPage()
//         } else if (delta > 10) {
//         this.previousPage()
//         }
//     }

//     previousPage() {
//         if (this.state.pageIndex > 0) {
//         this.setState({
//             pageIndex: this.state.pageIndex-1
//         })
//         }
//     }

//     nextPage() {
//         if (this.state.pageIndex+1 < this.state.numPages) {
//         this.setState({
//             pageIndex: this.state.pageIndex+1
//         })
//         }
//     }

//     render() {
//         let PDFContainerHeight = 600;
//         const { binaryPDFContent } = this.state
//         return (
//         <div
//             id="pdfContainer"
//             style={{width:this.PDFWidth, height:PDFContainerHeight, overflow:'hidden'}}
//             >
//             <Document
//             file={{data:binaryPDFContent}}
//             onLoadSuccess={(pdf) => {
//                 this.onDocumentLoadSuccess(pdf.numPages)
//             }}
//             className="pdfPreview"
//             rotate={0}
//             >
//             <Page
//                 key={`page_${this.state.pageIndex + 1}`}
//                 width={this.PDFWidth}
//                 pageNumber={this.state.pageIndex + 1}
//                 className="pdfPage"
//                 renderMode="svg"
//                 />
//                 <FakePage
//                 //  This is where we can customize how many pages we need cached
//                 pages={Math.min(this.state.numPages, this.state.pageIndex+20)}
//                 width={this.PDFWidth}
//                 />
//             </Document>
//         </div>
//         )
//     }
//     }

//     class FakePage extends React.Component {
//     constructor(props) {
//         super(props)
//     }
//     render() {
//         return(
//         <div style={{display: 'none'}}>
//             {
//             Array.from(
//                 new Array(this.props.pages),
//                 (el, index) => (
//                 <Page
//                     key={`page_${index + 1}`}
//                     width={this.props.width}
//                     className="pdfPage"
//                     renderMode="svg"
//                     pageNumber={index + 1}
//                 />
//                 ),
//             )
//             }
//         </div>
//         )
//     }
// }
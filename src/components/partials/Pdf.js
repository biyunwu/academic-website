import React, { Component } from 'react'
import { Page } from 'react-pdf'
import { Document } from 'react-pdf/dist/entry.webpack'

export default class Pdf extends Component {
    state = {
        // scale: 1.5,
        numPages: null,
        // pageNumber: 1,
        // chapter: this.props.chapter,
        // data: null
        // data: this.props.data
    }

    onDocumentLoadSuccess = ({ numPages }) => {
        this.setState({ numPages });
    }

    render() {
        const { numPages } = this.state;
        const { data, width } = this.props;
        // pagwWidth is determined by maincontent div's padding property which is "padiing: 0 3%"
        const pageWidth = width*0.94 
        return (
            data &&
            <div>
                <Document
                    className='pdf-canvas'
                    file={{data: data}}
                    onLoadSuccess={this.onDocumentLoadSuccess}
                    loading='Loading...'
                >
                    {/* Convert numPages to array which has elements from 1 to numPages */
                        Array.apply(null, Array(numPages)).map(function (_, i) {return i+1}).map(num => 
                        <Page
                            key={num}
                            pageNumber={num}
                            // scale={scale}
                            width={pageWidth}
                        />)
                    }
                </Document>
            </div>
        )
    }
}
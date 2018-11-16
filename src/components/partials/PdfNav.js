import React from 'react'

export default function Navbar (props) {
    // const generateChapterTitle = (currChapterTitle, currAnthor) => {
    //     return currAnthor? `${currAnthor}: ${currChapterTitle}` : currChapterTitle
    // }
    const generateAuthor = (currAnthor) => {
        return currAnthor? ' ' + currAnthor : ''
    }

    const {title, hasData, chapters, chapter, authors, reminderStyle, handleChapterChange} = props
    // Refer to Hamburgers library: https://github.com/jonsuh/hamburgers
    // const menuBaseClassName = "hamburger hamburger--collapse"
    // const menuClassName = isTocShown ? menuBaseClassName.concat(" is-active") : menuBaseClassName
    // const navOpenStyle = {position: "fixed", overflowY: "auto"}
    // const navStyle = isTocShown? navOpenStyle: {position: "fixed", top: "-1000000px"}
    // const burgerIconStyle = {position: isTocShown? "absolute": "fixed", top: "0", left: "0", zIndex: "999"}

    return (
        <nav>
            <div id="nav-content">
                {/* <button id='burger' className={menuClassName} type="button"
                    style={burgerIconStyle}
                    aria-label="Menu" aria-controls="sidebar"
                    onClick={updateSidebarStatus}
                >
                    <span className="hamburger-box">
                        <span className="hamburger-inner"></span>
                    </span>
                </button> */}
                {/* <a href="https://taojiangscholar.com/buddhism_and_psychology" target="_blank" rel="noopener noreferrer">
                    <img
                        src='https://taojiangscholar.com/static/media/logo.5fef45d2.png'
                        alt='The logo of the website'
                        style={{height: "40px", margin:'20px auto'}}
                    />
                </a> */}
                <h2>{title}</h2>
                {
                    hasData && !(chapter >=0)  &&
                    <div id='pdf-remainder' style={reminderStyle}>
                        <p>Choose a chapter to read. The PDF may take several seconds to be displayed.</p>
                        <p>For a better layout, please use laptop or desktop to open this page.</p> 
                    </div>
                }
                <div>
                    <p style={{fontFamily: "SF Pro Text Light", fontSize: "1.3rem"}}>Table of Contents</p>
                    <ul style={{listStyle: "circle", padding: "0 1.4em", fontFamily: "SF Pro Text Regular"}}>
                        {chapters.map((chapter, idx) => 
                            <li 
                                key={chapter}
                                style={{margin: "1em 0"}}
                            >   
                                <a
                                    onClick={e => {handleChapterChange.call(null, idx)}}
                                    href="#pdf"
                                >{chapter}</a>
                                {generateAuthor(authors[idx])}
                            </li>
                        )}
                    </ul>
                </div>
            </div>
        </nav>
    )
}
import React, { Component } from 'react';

export default class Header extends Component {
    render() {
        return (
        <div className="header">
            <header>
                <h1 className="App-title"><a href='/'>Tao Jiang</a></h1>
                <ul className="nav">
                    <li className="nav-item">
                        <a href="/" className="nav-link">Home</a>
                    </li>
                    <span className='link-seperator'>/</span>
                    <li className="nav-item">
                        <a href="/buddism_and_pasychology" className="nav-link active">Buddhism and Psychology</a>
                    </li>
                    <span className='link-seperator'>/</span>
                    <li className="nav-item">
                        <a href="/freud_in_china" className="nav-link">Freud in China</a>
                    </li>
                    <span className='link-seperator'>/</span>
                    <li className="nav-item">
                        <a href="/papers" className="nav-link">Papers</a>
                    </li>
                    <span className='link-seperator'>/</span>
                    <li className="nav-item">
                        <a href="/cv" className="nav-link">CV</a>
                    </li>
                    <span className='link-seperator'>/</span>
                    <li className="nav-item">
                        <a href="/about" className="nav-link">About</a>
                    </li>
                </ul>
            </header>
        </div>
        );
    }
}
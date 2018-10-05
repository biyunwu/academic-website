import 'react-app-polyfill/ie9'
import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import { BrowserRouter } from 'react-router-dom'
import App from './App'
// import { hydrate, render } from "react-dom"; // For prerendering
import registerServiceWorker from './registerServiceWorker'

ReactDOM.render(
    <BrowserRouter><App /></BrowserRouter>,
    document.getElementById('root')
)


// For prerendering
// const rootElement = document.getElementById("root");
// if (rootElement.hasChildNodes()) {
//     hydrate(<BrowserRouter><App /></BrowserRouter>, rootElement);
// } else {
//     render(<BrowserRouter><App /></BrowserRouter>, rootElement);
// }

registerServiceWorker();
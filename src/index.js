
import ReactGA from 'react-ga'
import 'react-app-polyfill/ie9'
import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import { BrowserRouter, Route } from 'react-router-dom'
import App from './App'
// import { hydrate, render } from "react-dom"; // For prerendering
import registerServiceWorker from './registerServiceWorker'


// Google Analytics reference: https://github.com/react-ga/react-ga/issues/122#issuecomment-353101102
ReactGA.initialize('UA-114112626-2')
class Analytics extends React.Component {
    componentDidMount() {
        this.sendPageChange(this.props.location.pathname, this.props.location.search)
    }

    componentDidUpdate (prevProps) {
        if (this.props.location.pathname !== prevProps.location.pathname
            || this.props.location.search !== prevProps.location.search) {
            this.sendPageChange(this.props.location.pathname, this.props.location.search)
        }
    }

    sendPageChange (pathname, search) {
        const page = pathname + search
        ReactGA.set({page});
        ReactGA.pageview(page);
    }

    render() {
        return null
    }
}

const AnalyticsTracker = () => <Route component={Analytics} />

ReactDOM.render(
    <BrowserRouter>
        <React.Fragment>
            <AnalyticsTracker />
            <App />
        </React.Fragment>
    </BrowserRouter>,
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
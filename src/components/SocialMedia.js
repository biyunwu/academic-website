import React, { PureComponent } from 'react'
import { Timeline } from 'react-twitter-widgets'
import {Helmet} from "react-helmet";

export default class SocialMedia extends PureComponent {
    styleObj = {
        display: "inline-block",
        fontFamily: "Helvetica Neue, Roboto, Segoe UI, Calibri, sans-serif",
        fontSize: "12px",
        // fontWeight: "bold",
        lineHeight: "16px",
        borderColor: "#eee #ddd #bbb",
        borderRadius: "5px",
        // borderStyle: "solid",
        // borderWidth: "1px",
        // boxShadow: "0 1px 3px rgba(0, 0, 0, 0.15)",
        margin: "0 auto",
        padding: "0",
        width: "50%",
        minWidth: "375px",
        maxWidth: "600px",
        minHeight: "600px"
    }

    LinkRenderer = (props) => <a href={props.href} target="_blank" rel="noopener noreferrer">{props.children}</a>
    
    render() {
        return (
            <>
                <Helmet>
                    <title>Twitter - Tao Jiang</title>
                    <meta name="description" content="Tao Jiang's Twitter timeline" />
                </Helmet>
                <blockquote style={this.styleObj}>
                    {/* Timeline (with options) */}
                    <Timeline
                        dataSource={{
                            sourceType: 'profile',
                            screenName: 'TaoJiangScholar'
                        }}
                        renderError={_err =>
                            <div style={{ fontSize: "large" }}>
                                <p>Could not load Twitter content due to browser privacy setting or internet connection.</p>
                                <p>Please check out <a href="https://twitter.com/taojiangscholar" target="_blank">Tao Jiang on Twitter</a>.</p>
                            </div>
                        }
                        options={{
                            chrome: "nofooter",
                            // width: 600,
                            // minHeight: 600,
                            dnt: true
                        }}
                    />
                </blockquote>
            </>
        )
    }
}
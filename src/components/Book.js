import React, { PureComponent } from 'react'
import ReactMarkdown from 'react-markdown'
import {Helmet} from "react-helmet"

export default class Book extends PureComponent {
    // state = {
    //     reviewHidden: true
    // }

    componentDidMount () {
        window.scrollTo(0,0)
    }

    // toggleReviewVisibility = () => {
    //     this.state.reviewHidden ? this.setState({reviewHidden: false}) : this.setState({reviewHidden: true})
    // }

    // LinkRenderer = (props) => <a href={props.href} target="_blank" rel="noopener noreferrer">{props.children}</a>

    render () {
        const {bookData, cover} = this.props
        const {seoTitle, seoDescription, title, publisher, bookLink, preOrderLink, readLink, bookIntroduction, reviews} = bookData
        // const {reviewHidden} = this.state
        // const buttonText = reviewHidden? 'More Reviews' : 'Fewer Review'

        // const moreReviews = 
        //     reviewHidden? '' : otherReviews && 
        //         (<ul className='more-book-review'>
        //             {otherReviews.map(review => 
        //                 <li key={review.reviewer}>
        //                     <p className='book-text'>
        //                         {review.review}
        //                     </p>
        //                     <p className={review.magazine? 'commentor magazine' : 'commentor'}>
        //                         {'– ' + review.reviewer}
        //                     </p>
        //                 </li>
        //             )}
        //         </ul>)

        const moreReviews = reviews && 
                <ul className='more-book-review'>
                    {reviews.map(review => 
                        <li key={review.reviewer} className='review-item'>
                            {/* <p className='book-text'>
                                {review.review}
                                <br/>
                                <br/>
                                <span className={review.magazine? 'commentor magazine' : 'commentor'}>
                                    {'– ' + review.reviewer}
                                </span>
                            </p> */}
                            {/* <p className={review.magazine? 'commentor magazine' : 'commentor'}>
                                {'– ' + review.reviewer}
                            </p> */}
                            <p className='book-text'>
                                {/* <span className={review.magazine? 'commentor magazine' : 'commentor'}>
                                    {review.reviewer + ':'}
                                </span> */}
                                <ReactMarkdown 
                                    className={review.magazine? 'commentor magazine' : 'commentor'}
                                    key={review.reviewer}
                                    source={review.reviewer + ' :'}
                                    linkTarget="_blank">
                                </ReactMarkdown>
                                {review.review}
                            </p>
                        </li>
                    )}
                </ul>

        return (
            <div id='maincontent-container'>
                <main className='book'>
                    <Helmet>
                        <title>{seoTitle}</title>
                        <meta name="description" content={seoDescription} />
                    </Helmet>
                    <div className='grid'>
                        <h2 className='bookname'>
                            {title}
                        </h2>
                        <div className='book-pic-container'>
                            <div className='gap'>
                                <img className='book-img' 
                                    src={cover} 
                                    alt={`The cover of '${title}'`}
                                />
                                <p className='publisher'>{publisher}</p>
                                {/* <button>Read</button> */}
                                {bookLink && 
                                    <a className='book-link' target="_blank" href={bookLink} rel="noopener noreferrer">
                                        Available on Amazon
                                    </a>}
                                {preOrderLink && 
                                    <a className='book-link' target="_blank" href={preOrderLink} rel="noopener noreferrer">
                                        Preoder
                                    </a>}
                                {readLink &&
                                    <a className='book-link' href={readLink}>
                                        Read Online
                                    </a>}
                            </div>
                        </div>

                        <div className='book-introduction'>
                            {bookIntroduction && bookIntroduction.map((text, idx) =>        
                                <ReactMarkdown
                                    className='book-text'
                                    key={`${title} introduction ${idx}`}
                                    source={text}
                                />

                            )}
                        </div>

                        {reviews && 
                            <div className='book-review'>
                                <h2>Reviews</h2>
                                    {/* <p className='book-text'>
                                        {primaryReview.review}
                                    </p>
                                    <p className='commentor magazine'>
                                        {'– ' + primaryReview.reviewer}
                                    </p> */}
                                {moreReviews}
                            </div>
                        }

                    </div>
                    {
                        // primaryReview && otherReviews &&
                        // <div className='review-button-container'>
                        //     <button className='review-button'
                        //         onClick={this.toggleReviewVisibility}
                        //     >
                        //         {buttonText}
                        //     </button>
                        // </div>
                    }
                </main>
            </div>
        )
    }
}
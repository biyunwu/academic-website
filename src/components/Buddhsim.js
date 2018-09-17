import React, { PureComponent } from 'react'
import BuddhismCover from './../imgs/buddism-cover.jpg'

const bookdata = {
    title: `Contexts and Dialogue: Yogācāra Buddhism and Modern Psychology on the Subliminal Mind`,
    publisher: `University of Hawaii Press`,
    bookLink: `http://a.co/d/1nYnDJI`,
    bookIntroduction: [
        `Are there Buddhist conceptions of the unconscious? If so, are they more Freudian, Jungian, or something else? If not, can Buddhist conceptions be reconciled with the Freudian, Jungian, or other models? These are some of the questions that have motivated modern scholarship to approach ālayavijñāna, the storehouse consciousness, formulated in Yogācāra Buddhism as a subliminal reservoir of tendencies, habits, and future possibilities.`,
        `Tao Jiang argues convincingly that such questions are inherently problematic because they frame their interpretations of the Buddhist notion largely in terms of responses to modern psychology. He proposes that, if we are to understand ālayavijñāna properly and compare it with the unconscious responsibly, we need to change the way the questions are posed so that ālayavijñāna and the unconscious can first be understood within their own contexts and then recontextualized within a dialogical setting. In so doing, certain paradigmatic assumptions embedded in the original frameworks of Buddhist and modern psychological theories are exposed. Jiang brings together Xuan Zang’s ālayavijñāna and Freud’s and Jung’s unconscious to focus on what the differences are in the thematic concerns of the three theories, why such differences exist in terms of their objectives, and how their methods of theorization contribute to these differences.`,
        `Contexts and Dialogue puts forth a fascinating, erudite, and carefully argued presentation of the subliminal mind. It proposes a new paradigm in comparative philosophy that examines the what, why, and how in navigating the similarities and differences of philosophical systems through contextualization and recontextualization.`
    ],
    primaryReview: {
        review: `"The wonderful sense of conclusion that Jiang brings to the reader is conveyed in the idea that there is much to be learned through interdisciplinary discussion. Jiang emphasizes that this discussion cannot take place at a shallow level, as very little new knowledge can be gained thereby. The point is made that we must learn to engage with different disciplines through what he calls ‘‘context and dialogue.’’ Overall, Jiang’s main argument for the importance of creating a new methodology for cross-disciplinary research in this way is presented very successfully."`,
        reviewer: 'Philosophy East & West',
        magazine: true
    },
    otherReviews: [
        {
            review: `“Jiang’s book succeeds on three levels: first, it offers an exceptionally clear introduction to Yogācāra Buddhism; second, it illuminates one very general and important difference between the models of mind in Buddhism and western psychology; and finally, it provides the right methodological cue for scholars engaged in comparative philosophical work. One leaves this book convinced that synthetic dialogue between Buddhism and modern psychology is possible, but that it will falter without adequate analysis of the paradigmatic differences that shape their respective projects.”`,
            reviewer: 'H-Net Reviews',
            magazine: false
        },
        {
            review: `“Jiang’s work … is a cautious reminder about the potential dangers of comparison that is helpful in the current academic climate, where comparative approaches are so popular. All who undertake comparative endeavors (even those who are not interested in Yogācāra Buddhism) should read Jiang’s book.”`,
            reviewer: 'Buddhist-Christian Studies',
            magazine: true
        },
        {
            review: `“Contexts and Dialogue rewards readers with useful and yet succinct introductions to the work of three seminal thinkers, and convincingly expands the methodological horizons of comparative philosophy.”`,
            reviewer: 'Journal of Chinese Philosophy',
            magazine: true
        },
        {
            review: `“Jiang’s stimulating work will appeal to a wide audience. He has succeeded in balancing the needs of various readers along with methodological issues and in so doing stayed focused on his primary goals. Overall, the work is a great success, points to new possibilities for dialogue between these viewpoints specifically, and attempts at cross-cultural study more generally.”`,
            reviewer: 'Dao',
            magazine: true
        }
    ]
}

export default class Buddhism extends PureComponent {
    state = {
        bookData: {},
        reviewHidden: true
    }

    componentDidMount () {
        this.setState({bookData: bookdata})
    }

    toggleReviewVisibility = () => {
        this.state.reviewHidden ? this.setState({reviewHidden: false}) : this.setState({reviewHidden: true})
    }

    render () {
        const {bookData, reviewHidden} = this.state
        const {title, publisher, bookLink, bookIntroduction, primaryReview, otherReviews} = bookData
        const buttonText = reviewHidden? 'More Reviews' : 'Fewer Review'

        const moreReviews = reviewHidden? '' :
                    otherReviews && 
                    (<ul className='more-book-review'>
                        {otherReviews.map(review => 
                            <li key={review.reviewer}>
                                <p className='book-text'>
                                    {review.review}
                                </p>
                                <p className={review.magazine? 'commentor magazine' : 'commentor'}>
                                    {'– ' + review.reviewer}
                                </p>
                            </li>
                        )}
                    </ul>)

        return (
            <main className='book'>
                <h2 className='main-title'>
                    {title}
                </h2>
                <div className='grid'>
                    <div className='book-pic-container'>
                        <div className='gap'>
                            <img className='book-img' 
                                src={BuddhismCover} 
                                alt={`The cover of '${title}'`}
                            />
                            <p className='publisher'>{publisher}</p>
                            <a className='book-link' target="_blank" href={bookLink} rel="noopener noreferrer">
                                Available on Amazon
                            </a>
                        </div>
                    </div>

                    <div className='book-introduction'>
                        {bookIntroduction && bookIntroduction.map((text, idx) =>
                            <p className='book-text' key={`${title} intriduction ${idx}`}>
                                {text}
                            </p>
                        )}
                    </div>

                    {primaryReview && 
                        <div className='book-review'>
                            <h2 className='main-title'>Reviews</h2>
                            <p className='book-text'>
                                {primaryReview.review}
                            </p>
                            <p className='commentor magazine'>
                                {'– ' + primaryReview.reviewer}
                            </p>
                            {moreReviews}
                        </div>
                    }

                </div>
                {
                    primaryReview && otherReviews &&
                    <div className='review-button-container'>
                        <button className='review-button'
                            onClick={this.toggleReviewVisibility}
                        >
                            {buttonText}
                        </button>
                    </div>
                }
            </main>
        )
    }
}
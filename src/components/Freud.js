import React, { PureComponent } from 'react'
import FreudCover from './../imgs/freud.jpg'

const bookdata = {
    title: `The Reception and Rendition of Freud in China: China’s Freudian Slip`,
    publisher: `Routledge`,
    bookLink: `http://a.co/d/g77CGA7`,
    bookIntroduction: [
        `Although Freud makes only occasional, brief references to China and Chinese culture in his works, for almost a hundred years many leading Chinese intellectuals have studied and appropriated various Freudian theories. However, whilst some features of Freud’s views have been warmly embraced from the start and appreciated for their various explanatory and therapeutic values, other aspects have been vigorously criticized as implausible or inapplicable to the Chinese context.`,
        `This book explores the history, reception, and use of Freud and his theories in China, and makes an original and substantial contribution to our understanding of the Chinese people and their culture as well as to our appreciation of western attempts to understand the people and culture of China. The essays are organised around three key areas of research. First, it examines the historical background concerning the China-Freud connection in the 20th century, before going on to use reconstructed Freudian theories in order to provide a modernist critique of Chinese culture. Finally, the book deploys traditional Chinese thought in order to challenge various aspects of the Freudian project. Both Freudianism’s universal appeal and its cultural particularity are in full display throughout the book. At the same time, the allure of Chinese cultural and literary expressions, both in terms of their commonality with other cultures and their distinctive characteristics, are also scrutinized.`,
        `This collection of essays will be welcomed by those interested in early modern and contemporary China, as well as the work and influence of Freud. It will also be of great interest to students and scholars of psychology, psychoanalysis, literature, philosophy, religion, and cultural studies more generally.`
    ],
    // primaryReview: {
    //     review: `"The wonderful sense of conclusion that Jiang brings to the reader is conveyed in the idea that there is much to be learned through interdisciplinary discussion. Jiang emphasizes that this discussion cannot take place at a shallow level, as very little new knowledge can be gained thereby. The point is made that we must learn to engage with different disciplines through what he calls ‘‘context and dialogue.’’ Overall, Jiang’s main argument for the importance of creating a new methodology for cross-disciplinary research in this way is presented very successfully."`,
    //     reviewer: 'Philosophy East & West',
    //     magazine: true
    // },
    // otherReviews: [
    //     {
    //         review: `“Jiang’s book succeeds on three levels: first, it offers an exceptionally clear introduction to Yogācāra Buddhism; second, it illuminates one very general and important difference between the models of mind in Buddhism and western psychology; and finally, it provides the right methodological cue for scholars engaged in comparative philosophical work. One leaves this book convinced that synthetic dialogue between Buddhism and modern psychology is possible, but that it will falter without adequate analysis of the paradigmatic differences that shape their respective projects.”`,
    //         reviewer: 'H-Net Reviews',
    //         magazine: false
    //     },
    //     {
    //         review: `“Jiang’s work … is a cautious reminder about the potential dangers of comparison that is helpful in the current academic climate, where comparative approaches are so popular. All who undertake comparative endeavors (even those who are not interested in Yogācāra Buddhism) should read Jiang’s book.”`,
    //         reviewer: 'Buddhist-Christian Studies',
    //         magazine: true
    //     },
    //     {
    //         review: `“Contexts and Dialogue rewards readers with useful and yet succinct introductions to the work of three seminal thinkers, and convincingly expands the methodological horizons of comparative philosophy.”`,
    //         reviewer: 'Journal of Chinese Philosophy',
    //         magazine: true
    //     },
    //     {
    //         review: `“Jiang’s stimulating work will appeal to a wide audience. He has succeeded in balancing the needs of various readers along with methodological issues and in so doing stayed focused on his primary goals. Overall, the work is a great success, points to new possibilities for dialogue between these viewpoints specifically, and attempts at cross-cultural study more generally.”`,
    //         reviewer: 'Dao',
    //         magazine: true
    //     }
    // ]
}
export default class Freud extends PureComponent {
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
                                src={FreudCover} 
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
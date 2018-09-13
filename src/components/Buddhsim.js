import React, { PureComponent } from 'react'
import BuddhismCover from './../imgs/buddism-cover.jpg'


export default class Home extends PureComponent {
    state = {
        reviewHidden: true
    }

    toggleReviewVisibility = () => {
        this.state.reviewHidden ? this.setState({reviewHidden: false}) : this.setState({reviewHidden: true})
    }

    render () {
        const reviewVisibilityClassName = this.state.reviewHidden? 'hidden' : ''
        const buttonText = this.state.reviewHidden? 'Show Reviews' : 'Close Reviews'
        return (
            <div className='book'>
                <h2 className='main-title'>
                    Contexts and Dialogue: Yogācāra Buddhism and Modern Psychology on the Subliminal Mind
                </h2>
                <div className='grid'>
                    <div className='book-pic-container'>
                            <img className='book-img' 
                                src={BuddhismCover} 
                                alt='The cover of Contexts and Dialogue: Yogācāra Buddhism and Modern Psychology on the Subliminal Mind'
                            />
                            <a className='book-link' href='http://a.co/d/1nYnDJI'>
                                Available on Amazon
                            </a>
                    </div>
                    <div className='book-introduction'>
                        <p className='book-text'>
                            Are there Buddhist conceptions of the unconscious? If so, are they more Freudian, Jungian, or something else? If not, can Buddhist conceptions be reconciled with the Freudian, Jungian, or other models? These are some of the questions that have motivated modern scholarship to approach ālayavijñāna, the storehouse consciousness, formulated in Yogācāra Buddhism as a subliminal reservoir of tendencies, habits, and future possibilities.
                        </p>
                        <p className='book-text'>
                            Tao Jiang argues convincingly that such questions are inherently problematic because they frame their interpretations of the Buddhist notion largely in terms of responses to modern psychology. He proposes that, if we are to understand ālayavijñāna properly and compare it with the unconscious responsibly, we need to change the way the questions are posed so that ālayavijñāna and the unconscious can first be understood within their own contexts and then recontextualized within a dialogical setting. In so doing, certain paradigmatic assumptions embedded in the original frameworks of Buddhist and modern psychological theories are exposed. Jiang brings together Xuan Zang’s ālayavijñāna and Freud’s and Jung’s unconscious to focus on what the differences are in the thematic concerns of the three theories, why such differences exist in terms of their objectives, and how their methods of theorization contribute to these differences.
                        </p>
                        <p className='book-text'>
                            Contexts and Dialogue puts forth a fascinating, erudite, and carefully argued presentation of the subliminal mind. It proposes a new paradigm in comparative philosophy that examines the what, why, and how in navigating the similarities and differences of philosophical systems through contextualization and recontextualization.
                        </p>
                        <imput tyle='button' className='review-button'
                            onClick={this.toggleReviewVisibility}
                        >
                            {buttonText}
                        </imput>
                    </div>
                    <div className={'book-review ' + reviewVisibilityClassName}>
                        <h2 className='main-title center'>Reviews</h2>
                        <p className='book-text'>
                            “Jiang’s book succeeds on three levels: first, it offers an exceptionally clear introduction to Yogācāra Buddhism; second, it illuminates one very general and important difference between the models of mind in Buddhism and western psychology; and finally, it provides the right methodological cue for scholars engaged in comparative philosophical work. One leaves this book convinced that synthetic dialogue between Buddhism and modern psychology is possible, but that it will falter without adequate analysis of the paradigmatic differences that shape their respective projects.” 
                        </p>
                        <p className='commentor'>
                            – H-Net Reviews
                        </p>
                        <p className='book-text'>
                            “The wonderful sense of conclusion that Jiang brings to the reader is conveyed in the idea that there is much to be learned through interdisciplinary discussion. Jiang emphasizes that this discussion cannot take place at a shallow level, as very little new knowledge can be gained thereby. The point is made that we must learn to engage with different disciplines through what he calls ‘‘context and dialogue.’’ Overall, Jiang’s main argument for the importance of creating a new methodology for cross-disciplinary research in this way is presented very successfully.” 
                        </p>
                        <p className='commentor magazine'>
                            – Philosophy East & West
                        </p>
                        <p className='book-text'>
                            “Jiang’s work … is a cautious reminder about the potential dangers of comparison that is helpful in the current academic climate, where comparative approaches are so popular. All who undertake comparative endeavors (even those who are not interested in Yogācāra Buddhism) should read Jiang’s book.” 
                        </p>
                        <p className='commentor magazine'>
                        – Buddhist-Christian Studies
                        </p>
                        <p className='book-text'>
                            “Contexts and Dialogue rewards readers with useful and yet succinct introductions to the work of three seminal thinkers, and convincingly expands the methodological horizons of comparative philosophy.” 
                        </p>
                        <p className='commentor magazine'>
                            – Journal of Chinese Philosophy
                        </p>
                        <p className='book-text'>
                            “Jiang’s stimulating work will appeal to a wide audience. He has succeeded in balancing the needs of various readers along with methodological issues and in so doing stayed focused on his primary goals. Overall, the work is a great success, points to new possibilities for dialogue between these viewpoints specifically, and attempts at cross-cultural study more generally.” 
                        </p>
                        <p className='commentor magazine'>
                            – Dao
                        </p>
                        <p className='book-text'>
                            “Jiang is a lucid writer with a keen sense of the tensions that logical entailments can create. He presents theoretical issues in a dramatic, clear manner…” 
                        </p>
                        <p className='commentor magazine'>
                            – Journal of Chinese Religion
                        </p>
                        <imput tyle='button' className='review-button'
                            onClick={this.toggleReviewVisibility}
                        >
                            Close Reviews
                        </imput>
                    </div>
                </div>
            </div>
        )
    }
}
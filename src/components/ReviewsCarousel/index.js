// Write your code here
import {Component} from 'react'

import './index.css'

const reviewsList = [
  {
    imgUrl: 'https://assets.ccbp.in/frontend/react-js/wade-warren-img.png',
    username: 'Wade Warren',
    companyName: 'Rang',
    description:
      'The most important thing I learnt is that nothing is a failure, but what we learn from that is a rich and rewarding experience.',
  },
  {
    imgUrl: 'https://assets.ccbp.in/frontend/react-js/adrian-williams-img.png',
    username: 'Adrian Williams',
    companyName: 'WheelO',
    description:
      'Coming to Startup School is the best thing that has happened to me. I wish every startup in the country should get this opportunity.',
  },
  {
    imgUrl: 'https://assets.ccbp.in/frontend/react-js/sherry-jhonson-img.png',
    username: 'Sherry Johnson',
    companyName: 'MedX',
    description:
      'I am glad to have such experienced mentors guiding us in every step through out the 4 weeks. I have improved personally and developed many interpersonal skills.',
  },
  {
    imgUrl: 'https://assets.ccbp.in/frontend/react-js/ronald-jones-img.png',
    username: 'Ronald Jones',
    companyName: 'Infinos Tech',
    description:
      'I am really loving the way how mentors are taking care of us, the way they are explaining big theories with lots of case studies and innovative methods.',
  },
]

class ReviewsCarousel extends Component {
  state = {index: 0}

  displayPreviousReview = () => {
    const {index} = this.state

    if (index < 1) {
      this.setState({index: 0})
    } else {
      this.setState(prevState => ({index: prevState.index - 1}))
    }
  }

  displayNextReview = () => {
    const length = reviewsList.length - 1
    const {index} = this.state

    if (index !== length) {
      this.setState(prevState => ({index: prevState.index + 1}))
    } else {
      this.setState({index: length})
    }
  }

  render() {
    const {index} = this.state

    return (
      <div className="bg-container">
        <div className="review-contianer">
          <h1 className="heading">Reviews</h1>

          <img
            src={reviewsList[index].imgUrl}
            alt={reviewsList[index].username}
          />
          <div className="user-details-container">
            <div className="arrow-container">
              <button
                onClick={this.displayPreviousReview}
                className="arrow-button"
                data-testid="leftArrow"
                type="button"
              >
                {
                  <img
                    src="https://assets.ccbp.in/frontend/react-js/left-arrow-img.png"
                    alt="left arrow"
                  />
                }{' '}
              </button>
              <p className="user-name">{reviewsList[index].username} </p>
              <button
                onClick={this.displayNextReview}
                className="arrow-button"
                data-testid="rightArrow"
                type="button"
              >
                {
                  <img
                    src="https://assets.ccbp.in/frontend/react-js/right-arrow-img.png"
                    alt="right arrow"
                  />
                }{' '}
              </button>
            </div>

            <p>{reviewsList[index].companyName} </p>
            <p className="description">{reviewsList[index].description}</p>
          </div>
        </div>
      </div>
    )
  }
}

export default ReviewsCarousel

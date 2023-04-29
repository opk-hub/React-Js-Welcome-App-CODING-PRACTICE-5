// Write your code here
import {Component} from 'react'

import './index.css'

class Welcome extends Component {
  state = {textContent: 'subscribe'}

  buttonClicked = () => {
    const {textContent} = this.state

    if (textContent === 'subscribe') {
      this.setState(() => ({textContent: 'subscribed'}))
    } else {
      this.setState(() => ({textContent: 'subscribe'}))
    }
  }

  render() {
    const {textContent} = this.state
    return (
      <div className="bg-container">
        <div className="card-container">
          <h1 className="heading">Welcome</h1>
          <p className="des">Thank you happy learning!</p>
          <button type="button" className="btn" onClick={this.buttonClicked}>
            {textContent}
          </button>
        </div>
      </div>
    )
  }
}

export default Welcome

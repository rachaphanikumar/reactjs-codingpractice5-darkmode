// Write your code here
import {Component} from 'react'

import './index.css'

class LightDarkMode extends Component {
  state = {isClicked: true}

  isSubscribe = () => {
    this.setState(prevValue => ({isClicked: !prevValue.isClicked}))
  }

  getbuttonText = () => {
    const {isClicked} = this.state
    return isClicked ? 'Light Mode' : 'Dark Mode'
  }
  bg = () => {
    const {isClicked} = this.state
    if (isClicked === true) {
      return 'inner'
    } else {
      return 'inner-1'
    }
  }
  render() {
    const buttonTxt = this.getbuttonText()
    const background = this.bg()
    return (
      <div className="main-container">
        <div className={background}>
          <h1 className="title">Click to Change Mode</h1>
          <button type="button" className="button" onClick={this.isSubscribe}>
            {buttonTxt}
          </button>
        </div>
      </div>
    )
  }
}

export default LightDarkMode

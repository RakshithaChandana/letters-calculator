// Write your code here.
import {Component} from 'react'
import './index.css'

class LettersCalculator extends Component {
  state = {inputPhrase: ''}

  inputSearch = event => {
    const {value} = event.target
    this.setState({inputPhrase: value})
  }

  render() {
    const {inputPhrase} = this.state
    return (
      <div className="app-container">
        <div className="letters-calculator-container">
          <div className="calculator-container">
            <div className="calculator-text-button-container">
              <h1 className="heading">Calculate the Letters you enter</h1>
              <label htmlFor="textElement" className="paragraph">
                Enter the Phrase
              </label>
              <br />
              <input
                type="text"
                className="text-element"
                placeholder="Enter the phrase"
                value={inputPhrase}
                onChange={this.inputSearch}
                id="textElement"
              />
              <div>
                <p type="button" className="button">
                  No.of letters: {inputPhrase.length}
                </p>
              </div>
            </div>
          </div>
          <img
            src="https://assets.ccbp.in/frontend/react-js/stop-watch-with-calculator-img.png"
            alt="letters calculator"
            className="image"
          />
        </div>
      </div>
    )
  }
}
export default LettersCalculator

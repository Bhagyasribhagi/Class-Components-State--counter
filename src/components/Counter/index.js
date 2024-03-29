import {Component} from 'react'

import './index.css'
class Counter extends Component {
  state = {count: 0}

  Increament = () => {
    this.setState(previousState => {
      console.log(`previous state count is ${previousState.count}`)

      return {count: previousState.count + 1}
    })
  }
  Decreament = () => {
    console.log('Decreament clicked')
    this.setState(previousState => {
      console.log(`previous state count is ${previousState.count}`)

      return {count: previousState.count - 1}
    })
  }

  render() {
    const {count} = this.state

    return (
      <div className="container">
        <h1 className="heading">Counter</h1>
        <p className="count">{count}</p>
        <div>
          <button className="button" onClick={this.Increament}>
            Increase
          </button>
          <button className="button" onClick={this.Decreament}>
            Decrease
          </button>
        </div>
      </div>
    )
  }
}

export default Counter

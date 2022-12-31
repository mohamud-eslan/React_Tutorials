import React, { Component } from 'react'

export default class StateCom extends Component {

    constructor(){
        super()
        this.state = {
            StateCom: 'welcome visitor'
        }
    }

    changeMessage() {
        this.setState({
            StateCom: 'thank you for subscriping'
        })
    }
  render() {
    return (
      <div>
        <h1>{this.state.StateCom}</h1>
        <button onClick={() => this.changeMessage()}>subscripe</button>
      </div>
    )
  }
}

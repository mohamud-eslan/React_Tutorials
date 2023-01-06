import React, { Component } from 'react'

 class ClassClick extends Component {       
    clickHandle(){
        console.log( 'the button clicked happens');
    }
  render() {
    return (
      <div>
        <button onClick={this.clickHandle}>click me now</button>
      </div>
    )
  }
}

export default ClassClick
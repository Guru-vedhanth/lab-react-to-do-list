/* eslint-disable react/prop-types */
import { Component } from 'react'

export default class input extends Component {
    
  render() {
    return (
      <div>
        <div id="input">
      <input id="value"type="text" value={this.props.inputValue} 
      placeholder='Enter Text'
       onChange={(e)=>this.props.handleChange(e.target.value)}/>
      <button onClick={this.props.handlesubmit}>Create</button>
      </div>
      </div>
    )
  }
}
/* eslint-disable react/no-direct-mutation-state */
import { Component } from 'react'
import './App.css'
import List from "./components/List"
import Input from "./components/input"

export class App extends Component {

  constructor(props) {
    super(props)
  
    this.state = {
       value: "",
       data:[]
    }
  }
  
  handleChange =(text) =>{
    this.setState({value:text})
  }

  handlesubmit = () => {
    //a simple if condition here for the edge case.
    if(this.state.value!==null && this.state.value!==""){
      this.state.data.push(this.state.value)
      this.setState({value:""})
    }

  }

  handleDelete = (index) => {
    this.state.data.splice(index,1)
    this.setState({data:this.state.data})
  }

  handleUpdate =(index)=>{
    //a simple if condition here for the edge case.
    const data =  prompt("Enter the new text")
    if(data!==null && data!==""){
      this.state.data[index] = data
      this.setState({data:this.state.data})
    }

  }

  render() {
    return (
      <>
      

      <Input inputValue={this.state.value} handlesubmit={this.handlesubmit} handleChange={this.handleChange}/>

    <div id='text'>
      <h1>{this.state.value}</h1>
    </div>



    <List data={this.state.data} handleDelete={this.handleDelete} handleUpdate={this.handleUpdate}/>
      </>
    )
  }
}

export default App
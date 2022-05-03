import { Component } from "react";
import './App.css';

export default class App extends Component {
  state = {
    id: '',
  }

  onChange = e => {
    this.setState({
      [e.target.name] : e.target.value,
    })
  }

  render() {
    return(
      <>
        <input type='text' name='id' onChange={this.onChange}/>
        <button>Send</button>
        <div>{this.state.id}</div>
      </>
    )
  }
}
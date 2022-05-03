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

  submitId = () => {
    const post = {
      plzid : this.state.id,
    };

    fetch('http://localhost:3001/idplz', {
      // fetch 의 url 주소는 데이터를 보낼 주소
      method: 'post',     // 통신방법
      headers: {
        // API응답에 대한 정보를 담는다.
        'content-type' : 'application/json',
      },
      body: JSON.stringify(post),
      // 전달할 내용, 통신할 때난 객체로 통신하기에 객체 타입으로 작성한다.
    })
    .then((res) => res.json())
    .then((json) => {
      this.setState({
        id: json.text,
      })
      // res로 받은 것울 json으로 변환하고 json.text을 this.state.id에 저장한ㄷ.
    })
  };

  render() {
    return(
      <>
        <input type='text' name='id' onChange={this.onChange}/>
        <button onClick={this.submitId}>Send</button>
        <div>{this.state.id}</div>
      </>
    )
  }
}

import React, { Component } from 'react';
import axios from 'axios';

class AxiosDemo extends Component {

  componentDidMount() {
    this.getData()
  }

  state = {
    url: '',
    channel: '',
    dBLevel: '',
    timestamp: ''
  }

  getData = () => {
    const API_URL = 'https://monitor.dash-labs.com/dblevel/channel1/dblevel.json';
    const url = API_URL;
    axios.get(url).then(response => response.data)
    .then(data => {
        console.log(data)
        this.setState({
           channel: data.channel,
           dBLevel: data.dBLevel,
           timestamp: data.timestamp,
           url: API_URL
           })
      })
  }

  render() {
    return (
      <React.Fragment>
        <div>
          <br></br>
          <h3>A very simple Axios Example</h3>
          <hr></hr>     
          <br></br>
          <p>Here's your data .... from "{this.state.url}"</p>
          <hr></hr>
          <p>Channel: {this.state.channel} </p>
          <p>dbLevel: {this.state.dBLevel}</p>
          <p>Timestamp: {this.state.timestamp}</p>
          <p>Check this out - UK React Contract Rates: {' '}
          <a href={'https://www.itjobswatch.co.uk/contracts/uk/react%20developer.do'}>React.js Jobs</a></p>
          <hr></hr>
        </div>
      </React.Fragment>
    )
  }

}

export default AxiosDemo;


// Here is an example o returning an array!
// https://www.techiediaries.com/react-axios/
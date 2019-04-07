import React, { Component } from 'react';
import { testApi } from '../../api/index'
class Api extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: 'no data'
    }
  }
  handleClick() {
    this.setState({
      data: 'getting...'
    })
    testApi.overview().then((response) => {
      this.setState({
        data: JSON.stringify(response)
      })
    })
  }
  render() {
    return (
      <div>
       <p>{this.state.data}</p>
       <button onClick={this.handleClick.bind(this)}>get data</button>
      </div>
    )
  }
}

export default Api
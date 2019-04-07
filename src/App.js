import React, { Component } from 'react';
import { createStore } from 'redux';
import { Provider, connect } from 'react-redux';
import router from './router'
import reducer from './reducer'

//创建store
const store = createStore(reducer);

function formatName(user) {
  return user.firstName + ' ' + user.lastName
}

//需要渲染什么数据
function mapStateToProps(state) {
  return state
}

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <User />
        {router()}
      </Provider>
    );
  }
}

class User extends Component {
  render() {
    const user = this.props.user
    return <h1>Hello, {formatName(user)}!</h1>
  }
}

User = connect(mapStateToProps)(User)

export default App;

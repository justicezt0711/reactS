import React, { Component } from 'react';
import { connect } from 'react-redux';

//需要渲染什么数据
function mapStateToProps(state) {
  return {
    user: state.user
  }
}
//需要触发什么行为
function mapDispatchToProps(dispatch) {
  return {
    FirstNameChange: (value) => dispatch({ type: 'USER_FIRSTNAME_CHANGE', value}),
    LastNameChange: (value) => dispatch({ type: 'USER_LASTNAME_CHANGE',value })
  }
}

class ReduChange extends Component {
  render() {
    const { FirstNameChange, LastNameChange, user } = this.props;
    return (
      <div>
        <label>
          FIRSTNAME
          <input type="text" value={user.firstName} onChange={(e) => FirstNameChange(e.target.value)}/>
        </label>
        <label>
          LASTNAME
          <input type="text" value={user.lastName} onChange={(e) => LastNameChange(e.target.value)}/>
        </label>
      </div>
    );
  }
}

export default ReduChange = connect(mapStateToProps, mapDispatchToProps)(ReduChange)
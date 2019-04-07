import React from 'react';

function UserGreeting(props) {
  return <h1>Welcome back! on!</h1>;
}

function GuestGreeting(props) {
  return <h1>Please sign up. off!</h1>;
}

function WarningBanner(props) {
  // 希望能隐藏组件，即使它已经被其他组件渲染。
  // 若要完成此操作，你可以让 render 方法直接返回 null，而不进行任何渲染
  if (!props.warn) {
    return null;
  }

  return (
    <div className="warning">
      Warning!
    </div>
  );
}

class Toggle extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isToggleOn: true,
      count: 0,
      warn: false
    };

    // 为了在回调中使用 `this`，这个绑定是必不可少的
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState(state => ({
      isToggleOn: !state.isToggleOn,
      count: state.count + 1
    }));
  }
  handleAClick(value, e) {
    console.log(value)
    if (e) {
      e.preventDefault();
    }
    console.log('The link was clicked.');
  }
  handleClickWarn() {
    this.setState({
      warn: !this.state.warn
    })
  }

  render() {
    const isToggleOn = this.state.isToggleOn;
    const counts = this.state.count;
    let text;
    if(isToggleOn) {
      text = <UserGreeting />
    } else {
      text = <GuestGreeting />
    }
    return (
      <div>
        {/* 第一种在渲染时候就会被调用 */}
        <a href="https://www.baidu.com" onClick={this.handleAClick(1)}>ActionLinkInit</a>
        <br/>
        {/* 第二第三种等价 */}
        <a href="https://www.baidu.com" onClick={(e) => this.handleAClick(2, e)}>ActionLink2</a>
        <br/>
        <a href="https://www.baidu.com" onClick={this.handleAClick.bind(this, 3)}>ActionLink3</a>
        <br/>
        <button onClick={this.handleClick}>
          {this.state.isToggleOn ? 'ON' : 'OFF'}
        </button>
        {/* 填充 */}
        {text}
        {/* 三目运算符 */}
        {isToggleOn ? (<UserGreeting />) : (<GuestGreeting />)}
        {/* && */}
        {counts > 5 && <h2>counts is {counts}</h2>}
        <button onClick={() => this.handleClickWarn()}>
          {this.state.warn ? 'WARN ON' : 'WARN OFF'}
        </button>
        <WarningBanner warn={this.state.warn} />
      </div>
    );
  }
}
export default Toggle
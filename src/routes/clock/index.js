import React from 'react';

// setState
// 1. 不要直接修改 State 应该 this.setState({comment: 'Hello'});
// 2. State 的更新可能是异步的  可能会把多个 setState() 调用合并成一个调用
// this.setState((state, props) => ({
//   counter: state.counter + props.increment
// }));
// 3. State 的更新会被合并

// 生命周期
// 1.initialization
// Mountng
// 1. componentWillMount  只会被调用一次，调用this.setState不会引起渲染，少用
// 2. render return 一个React元素 是纯函数 不能在里面执行this.setState
// 3. componentDidMount 组件挂载到DOM后调用，且只会被调用一次
// update setState引起的state更新或父组件重新render引起的props更新，
// 更新后的state和props相对之前无论是否有变化，都将引起子组件的重新render。
// 1. shouldComponentUpdate(nextProps, nextState) 优化子组建在props不变情况下步随着伏组件重新渲染
// 2. componentWillReceiveProps(nextProps) 在这边调用 this.setState() 将不会引起第二次渲染。
// 3. componentWillUpdate(nextProps, nextState)
// 4. render
// 5. componentDidUpdate(prevProps, prevState)
// Unmounting
// 1. componentWillUnmount 清除组件中使用的定时器，清除componentDidMount中手动创建的DOM元素等

class Clock extends React.Component {
  constructor(props) {
    super(props);
    this.state = {date: new Date()};
  }

  componentDidMount() {
    this.timerID = setInterval(
      () => this.tick(),
      1000
    );
  }

  componentWillUnmount() {
    clearInterval(this.timerID);
  }

  tick() {
    this.setState({
      date: new Date()
    });
  }

  render() {
    return (
      <div>
        <h1>Hello, world!</h1>
        <h2>It is {this.state.date.toLocaleTimeString()}.</h2>
      </div>
    );
  }

}
export default Clock
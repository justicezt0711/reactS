import React from 'react'
import './index.scss'
// 组件使用一个特殊的 children prop 来将他们的子组件传递到渲染结果中
function FancyBorder(props) {
  return (
    <div className={'FancyBorder FancyBorder-' + props.color}>
      {props.children}
    </div>
  );
}

function Dialog(props) {
  return (
    <FancyBorder color="blue">
      <h1 className="Dialog-title">
        {props.title}
      </h1>
      <p className="Dialog-message">
        {props.message}
      </p>
      {props.children}
    </FancyBorder>
  );
}
// 类似于Vue里的slot
function WelcomeDialog() {
  return (
    <Dialog
      title="Welcome"
      message="Thank you for visiting our spacecraft!">
      <h4>Dialog's children</h4>
    </Dialog>
  );
}

function SplitPane(props) {
  return (
    <div className="SplitPane">
      <div className="SplitPane-left">
        {props.left}
      </div>
      <div className="SplitPane-right">
        {props.right}
      </div>
    </div>
  );
}

class Components extends React.Component {
  // constructor(props) {
  //   super(props);
  // }
  render() {
    return (
      <div>
        <WelcomeDialog />
        <SplitPane
        left={
          <p>left</p>
        }
        right={
          <p>right</p>
        } />
      </div>
    )
  }
}

export default Components
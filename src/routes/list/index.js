import React from 'react';
import './index.less'
// import './index.scss'

function ListItem(props) {
  // 正确！这里不需要指定 key:
  return <li className="item">{props.value}</li>;
}

function NumberList(props) {
  const numbers = props.numbers;
  const listItems = numbers.map((number) =>
    // 一个元素的 key 最好是这个元素在列表中拥有的一个独一无二的 字符串
    // key 应该在数组的上下文中被指定
    <ListItem key={number.toString()} value={number} />
  );
  return (
    <ul>{listItems}</ul>
  );
}

function NumberListJSX(props) {
  const numbers = props.numbers;
  return (
    <ul>
      {numbers.map((number) =>
        <ListItem key={number.toString()} value={number} />
      )}
    </ul>
  );
}

class List extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      numbers: [1, 2, 3, 4, 5]
    }
  }
  render() {
    return (
      <div>
        <NumberList numbers={this.state.numbers} />
        <NumberListJSX numbers={this.state.numbers} />
      </div>
    )
  }
}

export default List
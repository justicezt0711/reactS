import React from 'react'
class Reservation extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isGoing: true,
      numberOfGuests: 2
    };
    this.handleInputChange = this.handleInputChange.bind(this);
  }

  handleInputChange(event) {
    const target = event.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const name = target.name;
    this.setState({
      [name]: value
    });
  }

  handleSubmit(event) {
    event.preventDefault();
    const state = this.state
    alert(`
    ${state.isGoing ? '参与' : '不参与'} 
    ${state.isGoing ? '人数:' + state.numberOfGuests : ''}
    `)
  }

  render() {
    return (
      <form onSubmit={(e)=> this.handleSubmit(e)}>
        <label>
          参与:
          <input
            name="isGoing"
            type="checkbox"
            checked={this.state.isGoing}
            onChange={this.handleInputChange} />
        </label>
        {/* 不可编辑 */}
        {/* <input type="text" value="hi"/> */}
        <br />
        <label>
          来宾人数:
          <input
            name="numberOfGuests"
            type="number"
            value={this.state.numberOfGuests}
            onChange={this.handleInputChange} />
        </label>
        <input type="submit" value="提交" />
      </form>
    );
  }
}
class Form extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      inputValue: '',
      textareaValue: '',
      selectValue: 'lime'
    };
    this.handleChangeSelect = this.handleChangeSelect.bind(this);
  }
  handleChangeInput(event) {
    this.setState({inputValue: event.target.value.toUpperCase()});
  }
  handleChangeTextarea(event) {
    this.setState({textareaValue: event.target.value});
  }
  handleChangeSelect(event) {
    this.setState({selectValue: event.target.value});
  }

  handleSubmit(event) {
    event.preventDefault();
    const state = this.state
    alert(`
    提交的名字: ${state.inputValue} 
    提交的文章: ${state.textareaValue}
    提交的选择: ${state.selectValue}
    `)
  }
  render() {
    return (
      <div>
        <form onSubmit={(e)=> this.handleSubmit(e)}>
          <label>
            名字:
            <input type="text" value={this.state.inputValue} onChange={this.handleChangeInput.bind(this)} />
          </label>
          <br/>
          <label>
            文章:
            <textarea value={this.state.textareaValue} onChange={this.handleChangeTextarea.bind(this)} />
          </label>
          <br/>
          <label>
            选择你喜欢的风味:
            <select value={this.state.selectValue} onChange={this.handleChangeSelect}>
              <option value="grapefruit">葡萄柚</option>
              <option value="lime">柠檬</option>
              <option value="coconut">椰子</option>
              <option value="mango">芒果</option>
            </select>
          </label>
          <br/>
          <input type="submit" value="提交" />
        </form>
        <Reservation />
      </div>
    )
  }
}

export default Form
import React from 'react'

const products = [
  {category: "Sporting Goods", price: "$49.99", stocked: true, name: "Football"},
  {category: "Sporting Goods", price: "$9.99", stocked: true, name: "Baseball"},
  {category: "Sporting Goods", price: "$29.99", stocked: false, name: "Basketball"},
  {category: "Electronics", price: "$99.99", stocked: true, name: "iPod Touch"},
  {category: "Electronics", price: "$399.99", stocked: false, name: "iPhone 5"},
  {category: "Electronics", price: "$199.99", stocked: true, name: "Nexus 7"}
];
// 搜索 选中 筛选
function filter(list, key, stocked) {
  let products = list.slice()
  if(key) {
    products = products.filter(el => {
      let str = el.name.toString()
      return str.indexOf(key) !== -1
    })
  }
  if(stocked) {
    products = products.filter(el => el.stocked)
  }
  return products
}
// 搜索框Class
function SearchBar(props) {
  return(
    <div>
      <input type="text" value={props.filterText} placeholder="Search..." onChange={props.onChangeText}/>
      <br/>
      <label>
        <input type="checkbox" checked={props.inStockOnly} onChange={props.onChangeCheck}/>
        Only show Products in stock
      </label>
    </div>
  )
}
// 产品类表 Class
function ProductCategoryRow(props) {
  let productCategory = props.value;
  // 分离出产品类
  let productCategoryRow = productCategory.reduce((obj, el) =>{
    obj[el.category] ? obj[el.category].push(el) : obj[el.category] = [el]
    return obj
  }, {})
  let row = Object.keys(productCategoryRow)
  const renderRow = row.map((key) => {
    return (
      <div key={key}>
        <h3>{key}</h3>
        <ProductRow column={productCategoryRow[key]}/>
      </div>
    )
  })
  return renderRow
}
// 产品列表 Class
function ProductRow(props) {
  const column = props.column
  const renderColumn = column.map(el => {
    return <li key={el.name}>{el.name + '' + el.price}</li>
  })
  return (
    <ul>{renderColumn}</ul>
  )
}

class ProductTable extends React.Component {
  render() {
    const filterText = this.props.filterText
    const inStockOnly = this.props.inStockOnly
    const products = this.props.products
    let value = filter(products, filterText, inStockOnly)
    return (
      <div>
        <h3><span>Name</span> <span>Price</span></h3>
        <ProductCategoryRow value={value}/>
      </div>
    )
  }
}
class FilterableProductTable extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      filterText: '',
      inStockOnly: false,
      products: []
    }
  }
  componentDidMount() {
    this.setState({
      products: products
    })
  }
  onChangeText(e) {
    this.setState({
      filterText: e.target.value
    })
  }
  onChangeCheck(e) {
    this.setState({
      inStockOnly: e.target.checked
    })
  }
  render() {
    const { filterText, inStockOnly, products  } = this.state
    return(
      <div>
        <SearchBar 
          filterText={filterText} inStockOnly={inStockOnly}
          onChangeText = {this.onChangeText.bind(this)}
          onChangeCheck = {this.onChangeCheck.bind(this)}
        />
        <ProductTable filterText={filterText} inStockOnly={inStockOnly} products={products}/>
      </div>
    )
  }
}

export default FilterableProductTable
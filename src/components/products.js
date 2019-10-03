import React, { Component } from "react";
import { connect} from "react-redux";
import { getProducts } from "../actions"

class Products extends Component {

  componentDidMount() {
    this.props.getProducts()
  }

  render() {
    console.log("Products Component Props: ", this.props)
    return (
      <div>
        <h2 className="center">Product List Here</h2>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    products: state.products.list
  }
}

export default connect(mapStateToProps, {
  getProducts: getProducts
})(Products);

import React, { Component } from "react";
import axios from "axios";
class PortfolioHome extends Component {
  constructor(props) {
    super(props);
    this.state = {
      StockName: "",
      StockCode: "",
      Quantity: "",
      UnitPrice: "",
    };

    this.handleChange = this.handleChange.bind(this);
  }

  handleSubmit(event) {
    event.preventDefault();
    let configCors = {
        headers: {
          "Content-Type": "application/json",
          'Access-Control-Allow-Origin': '*',
          }
        }
    axios({
      method: "POST",
      url: "http://localhost:64425/stock",
      data: this.state,
      config:configCors
    }).then((response) => {
      alert("data posted successfully");
      console.log(response);
      console.log(JSON.stringify(response.data))
      if (response["statusText"] === "OK") {
        //alert("Data submitted to api successfully, happy coding");
        alert(JSON.stringify(response.data));
      } else if (response["statusText"] !== "OK") {
        alert("some went wrong, please check");
        
      }
    });
  }

  handleChange({ target }) {
    this.setState({ [target.name]: target.value });
  }

  //this.setState({ [target.name]: target.value });

  render() {
    return (
      <div className="container">
        <form onSubmit={this.handleSubmit.bind(this)} method="POST">
          <div className="form-group">
            <label>StockName</label>
            <input
              type="text"
              name="StockName"
              className="form-control"
              value={this.state.StockName}
              onChange={this.handleChange}
            ></input>
          </div>
          <div className="form-group">
            <label>StockCode</label>
            <input
              type="text"
              name="StockCode"
              className="form-control"
              value={this.state.StockCode}
              onChange={this.handleChange}
            ></input>
          </div>
          <div className="form-group">
            <label>Quantity</label>
            <input
              type="text"
              name="Quantity"
              className="form-control"
              value={this.state.Quantity}
              onChange={this.handleChange}
            ></input>
          </div>
          <div className="form-group">
            <label>UnitPrice</label>
            <input
              type="text"
              name="UnitPrice"
              className="form-control"
              value={this.state.UnitPrice}
              onChange={this.handleChange}
            ></input>
          </div>
          <input type="submit" className="btn btn-primary" value="Submit" />
        </form>
      </div>
    );
  }
}

export default PortfolioHome;

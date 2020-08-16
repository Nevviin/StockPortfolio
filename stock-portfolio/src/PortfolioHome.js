import React, { Component } from "react";

class PortfolioHome extends Component {
 
    constructor(props)
    {
        super(props);
        this.state = {
            StockName:'Westpac'
            ,StockCode:'WBC'
            ,Quantity:'60'
            ,UnitPrice:'18'
        }

    }
 
    handleSubmit(event)
    {
    console.log(event.target.value);
    alert(event.target.value);
    event.preventDefault();
    }
  


 
    render() {
    return (
        <div className="container">
      <form onSubmit={this.handleSubmit.bind(this)} method="POST">
        <div className="form-group">
          <label>StockName</label>
          <input type="text" className="form-control"></input>
        </div>
        <div className="form-group">
          <label>StockCode</label>
          <input type="text" className="form-control"></input>
        </div>
        <div className="form-group">
          <label>Quantity</label>
          <input type="text" className="form-control"></input>
        </div>
        <div className="form-group">
          <label>UnitPrice</label>
          <input type="text" className="form-control"></input>
        </div>
        <input type="submit"  className="btn btn-primary"  value="Submit" />
      </form>
      </div>
    );
  }
}




export default PortfolioHome;

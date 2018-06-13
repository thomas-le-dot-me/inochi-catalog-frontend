import React, { Component } from 'react';
import Navbar from './Navbar';
import ReactDOM from 'react-dom';
import axios from 'axios';
import { Link } from 'react-router-dom';

class Create extends Component {

  constructor() {
    super();
    this.state = {
      name: '',
      price: '',
      imgUrl: '',
      barcodeUrl: ''
    };
  }

  onChange = (e) => {
    const state = this.state
    state[e.target.name] = e.target.value;
    this.setState(state);
  }

  onSubmit = (e) => {
    e.preventDefault();
    const { name, price, imgUrl, barcodeUrl } = this.state;

    axios.post('http://localhost:3001/api/v1/items', { name, price, imgUrl, barcodeUrl })
      .then((result) => {
        this.props.history.push("/")
      });
  }

  render() {
    const { name, price, imgUrl, barcodeUrl } = this.state;
    return (
        <div>
            <Navbar></Navbar>
            <div className="container">
                <div className="panel panel-default">
                <div className="panel-heading">
                    <h3 className="panel-title">
                    Add item
                    </h3>
                </div>
                <div className="panel-body">
                    <form onSubmit={this.onSubmit}>
                    <div className="form-group">
                        <label for="name">Name:</label>
                        <input type="text" className="form-control" name="name" value={name} onChange={this.onChange} placeholder="Name" />
                    </div>
                    <div className="form-group">
                        <label for="price">Price:</label>
                        <input type="text" className="form-control" name="price" value={price} onChange={this.onChange} placeholder="VND" />
                    </div>
                    <div className="form-group">
                        <label for="imgUrl">Image URL:</label>
                        <input type="text" className="form-control" name="imgUrl" value={imgUrl} onChange={this.onChange} placeholder="http://" />
                    </div>
                    <div className="form-group">
                        <label for="barcodeUrl">Barcode URL:</label>
                        <input type="text" className="form-control" name="barcodeUrl" value={barcodeUrl} onChange={this.onChange} 
                        placeholder="http://" />
                    </div>
                    <button type="submit" className="btn btn-default">Submit</button>
                    </form>
                </div>
                </div>
            </div>
      </div>
    );
  }
}

export default Create;
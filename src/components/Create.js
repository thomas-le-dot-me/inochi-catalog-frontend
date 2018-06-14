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
    console.log(e.target.name);
    this.setState(state);
  }
  
  cloudinaryImageUpload = async(formData) => {
    try {
        const CLOUDINARY_URL='https://api.cloudinary.com/v1_1/dquw8pmyf/upload';
        const CLOUDINARY_PRESET = 'jgwzvl8r';
        axios({
            url: CLOUDINARY_URL,
            method: 'POST',
            headers:{
                'Content-Type':'application/x-www-form-urlencoded'
            },
            data: imgFormData
        })
        // this.setState({ user })
      } catch (e) {
        this.setState({ err: e.message })
      } 
  }


  onSubmit = (e) => {
    e.preventDefault();
    const { name, price} = this.state;

    const CLOUDINARY_URL='https://api.cloudinary.com/v1_1/dquw8pmyf/upload';
    const CLOUDINARY_PRESET = 'jgwzvl8r';

    const imgFile = e.target.imgUrl.files[0];
    let imgFormData = new FormData();
    imgFormData.append('file', imgFile);
    imgFormData.append('upload_preset', CLOUDINARY_PRESET);


    const barcodeFile = e.target.barcodeUrl.files[0];
    let barcodeFormData = new FormData();
    barcodeFormData.append('file', barcodeFile);
    barcodeFormData.append('upload_preset', CLOUDINARY_PRESET);

    let imgUrl = '', barcodeUrl = '';
    axios({
        url: CLOUDINARY_URL,
        method: 'POST',
        headers:{
            'Content-Type':'application/x-www-form-urlencoded'
        },
        data: imgFormData
    }).then((res) => {
        imgUrl = res.data.url;
        axios({
            url: CLOUDINARY_URL,
            method: 'POST',
            headers:{
                'Content-Type':'application/x-www-form-urlencoded'
            },
            data: barcodeFormData
        }).then( (res) => {
            barcodeUrl = res.data.url;
            axios.post('http://localhost:3001/api/v1/items', { name, price, imgUrl, barcodeUrl })
             .then( (res) => {
                console.log(res);
            });
        }).catch(function(err){
            console.log(err);
        });
    }).catch((err) => {
        console.log(err);
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
                        <label for="imgUrl">Image</label>
                        <input type="file" className="form-control" name="imgUrl" />
                    </div>
                    <div className="form-group">
                        <label for="barcodeUrl">Barcode</label>
                        <input type="file" className="form-control" name="barcodeUrl" />
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
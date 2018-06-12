import React, { Component } from 'react';

class Item extends Component {

    render() {
      return (
       <div className="card">
            <img className="card-img-top img-fluid" 
                src="https://www.soufeel.com.tw/media/catalog/product/cache/0/small_image/380x380/9df78eab33525d08d6e5fb8d27136e95/C/E/CED045.jpg"></img>
            <div class="card-body">
                <h5 class="card-title">Card title</h5>
                <img className="img-fluid" 
                src="https://upload.wikimedia.org/wikipedia/commons/6/65/Code11_barcode.png"></img>
            </div>
       </div>
      );
    }
  }
  
  export default Item;
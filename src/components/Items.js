import React, { Component } from 'react';
import Item from './Item';
import Navbar from './Navbar';

class Items extends Component {

    constructor(props) {
        super(props);
        this.state = {
          items: []
        };
    }

    componentDidMount() {
        // axios.get('http://localhost:3000/api/v1/contacts')
        //   .then(res => {
        const items = [
            {
                name : 'MS1',
                price: '40.000 VND',
                imgUrl: 'https://www.soufeel.com.tw/media/catalog/product/cache/0/small_image/380x380/9df78eab33525d08d6e5fb8d27136e95/C/E/CED045.jpg',
                barcodeUrl : 'https://upload.wikimedia.org/wikipedia/commons/6/65/Code11_barcode.png'
            },
            {
                name : 'MS1',
                price: '40.000 VND',
                imgUrl: 'https://www.soufeel.com.tw/media/catalog/product/cache/0/small_image/380x380/9df78eab33525d08d6e5fb8d27136e95/C/E/CED045.jpg',
                barcodeUrl : 'https://upload.wikimedia.org/wikipedia/commons/6/65/Code11_barcode.png'
            },
            {
                name : 'MS1',
                price: '40.000 VND',
                imgUrl: 'https://www.soufeel.com.tw/media/catalog/product/cache/0/small_image/380x380/9df78eab33525d08d6e5fb8d27136e95/C/E/CED045.jpg',
                barcodeUrl : 'https://upload.wikimedia.org/wikipedia/commons/6/65/Code11_barcode.png'
            },
            {
                name : 'MS1',
                price: '40.000 VND',
                imgUrl: 'https://www.soufeel.com.tw/media/catalog/product/cache/0/small_image/380x380/9df78eab33525d08d6e5fb8d27136e95/C/E/CED045.jpg',
                barcodeUrl : 'https://upload.wikimedia.org/wikipedia/commons/6/65/Code11_barcode.png'
            },
            {
                name : 'MS1',
                price: '40.000 VND',
                imgUrl: 'https://www.soufeel.com.tw/media/catalog/product/cache/0/small_image/380x380/9df78eab33525d08d6e5fb8d27136e95/C/E/CED045.jpg',
                barcodeUrl : 'https://upload.wikimedia.org/wikipedia/commons/6/65/Code11_barcode.png'
            },
            {
                name : 'MS1',
                price: '40.000 VND',
                imgUrl: 'https://www.soufeel.com.tw/media/catalog/product/cache/0/small_image/380x380/9df78eab33525d08d6e5fb8d27136e95/C/E/CED045.jpg',
                barcodeUrl : 'https://upload.wikimedia.org/wikipedia/commons/6/65/Code11_barcode.png'
            }
        ]    
        this.setState({ items: items });
    }

    renderItemBlock(item){
        return (
            <div className="item col-md-3" style={{'margin-top': '20px'}}>
                <div className="card">
                    <img className="card-img-top img-fluid" src={item.imgUrl}></img>
                    <div class="card-body">
                        <h5 class="card-title">{item.name}</h5>
                        <img className="img-fluid" src={item.barcodeUrl}></img>
                    </div>
                 </div>
            </div>
        );
    }

    renderRow(block){
        return (
            <div className="row">
                {block}
            </div>
        );
    }

    renderItems(items) {
        let blocks = [], rows = [];
        items.forEach(item  => {
            const itemBlock = this.renderItemBlock(item);
            if (itemBlock) {
                blocks.push(itemBlock);
            }
            if (blocks.length >= 4) {
                const row = this.renderRow(blocks);
                if (row) {
                    rows.push(row);
                }
                blocks = [];
            }
        });    
        const row = this.renderRow(blocks);
        if (row) {
            rows.push(row); 
        }
        return rows;
    }

    render () {
        const items = this.renderItems(this.state.items);
        return (
            <div className="container">
                <Navbar></Navbar>
                {items}
            </div>
        );
    }
}

export default Items;
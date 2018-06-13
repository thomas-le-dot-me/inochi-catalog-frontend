import React, { Component } from 'react';
import axios from 'axios';
import Navbar from './Navbar';

class Items extends Component {

    constructor(props) {
        super(props);
        this.state = {
          items: []
        };
    }

    componentDidMount() {
        axios.get('http://localhost:3001/api/v1/items')
          .then(res => {
              console.log(res.data);
              this.setState({ items: res.data });
          });
    }

    renderItemBlock(item){
        return (
            <div className="item col-md-3" style={{'margin-top': '20px'}}>
                <div className="card">
                    <img className="card-img-top img-fluid" src={item.imgUrl}></img>
                    <div class="card-body">
                        <h5 class="card-title text-center">{item.name} - <span>{item.price}</span> </h5>
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
            <div>
                <Navbar></Navbar>
                <div className="container">
                    {items}
                </div>
            </div>
        );
    }
}

export default Items;
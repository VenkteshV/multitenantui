import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { categoriesFetchData } from '../actions/categories';
import {Link} from 'react-router';
import '../sidebar.css';
require('react-datagrid/index.css')

import $ from 'jquery';
import _ from 'lodash';
let ReactDataGrid = require('react-datagrid');
let columns = [];
let url1 = [];
 class Categories extends Component {
constructor(props){

  super(props);
  url1="http://"+this.props.params.value+".lvh.me:3000/categories";
console.log("url",url1);
  this.state={
    url: url1,

    columns: [],
    activePage: 1,
    pageSize: 20
  };
}

  componentDidMount() {
    console.log(this.state.url);
    this.props.fetchData(this.state.url);
    if (this.props.hasErrored) {
        return <p>Sorry! There was an error loading the items</p>;
    }

    if (this.props.isLoading) {
        return <p>Loading…</p>;
    }
    console.log('item in comp',this.props.type);

  /*  $.ajax({
      url: this.state.url,
      type: 'GET',

      cache: false,
      success: function jsonCallback(dat) {


          _.forEach(dat[0],function( value,key){
            columns.push({name: key});
          });

          this.setState({columns});

      }.bind(this),


    });*/



  }



  render() {
console.log("in render",this.props.category);
_.forEach(this.props.category[0],function( value,key){
  columns.push({name: key});
})

    return (
      <div>
      <div className="navbar navbar-inverse navbar-fixed-left">
  <a className="navbar-brand" href="#">Brand</a>
  <ul className="nav navbar-nav">
  <li><a href="#">Categories</a></li>
 <li><a href="#">Tasks</a></li>
</ul>
</div>
<div className="container">
 <div className="row">
        <ReactDataGrid
          columns={columns}
          dataSource={this.state.url}
          idProperty='id'
          pagination={false}
          style={{height: 500}}
          />
</div>
</div>
</div>

    );

  }
}
const mapStateToProps = (state) => {
    return {
        category: state.categories,
        hasErrored: state.categoriesHasErrored,
        isLoading: state.categoriesIsLoading
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        fetchData: (url) => dispatch(categoriesFetchData(url))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Categories);

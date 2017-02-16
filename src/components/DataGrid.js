import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { typesFetchData } from '../actions/types';
import {Link} from 'react-router';
require('react-datagrid/index.css')

import $ from 'jquery';
import _ from 'lodash';
let ReactDataGrid = require('react-datagrid');
let columns = [];
let url1 = [];
 class DataGrid extends Component {
constructor(props){

  super(props);
  url1="http://"+this.props.params.value+".lvh.me:3000/types";
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
console.log("in render",this.props.type);
_.forEach(this.props.type[0],function( value,key){
  columns.push({name: key});
})

    return (
      

        <ReactDataGrid
          columns={columns}
          dataSource={this.state.url}
          idProperty='id'
          pagination={false}
          style={{height: 500}}
          />



    );

  }
}
const mapStateToProps = (state) => {
    return {
        type: state.types,
        hasErrored: state.typesHasErrored,
        isLoading: state.typesIsLoading
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        fetchData: (url) => dispatch(typesFetchData(url))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(DataGrid);

import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { categoriesFetchData } from '../actions/categories';
import { categoriesPostData } from '../actions/categories';
import { Modal, Form, Button, FormGroup } from 'react-bootstrap';
import {Link} from 'react-router';
import ReactDOM from 'react-dom';
import '../sidebar.css';
require('react-datagrid/index.css')

import $ from 'jquery';
import _ from 'lodash';
let ReactDataGrid = require('react-datagrid');
let columns = [];
let url1 = [];
var details = {};
 class Categories extends Component {
constructor(props){

  super(props);
  url1="http://"+this.props.params.value+".lvh.me:3000/categories";
console.log("url",url1);
  this.state={
    url: url1,
    showModal: false,

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

  close() {
     this.setState({ showModal: false });
   }

   open() {
     this.setState({ showModal: true });
   }





  hideListItem() {
    React.unmountComponentAtNode(document.querySelector('#modal-wrapper'));
}
_saveCategory(e) {
		e.preventDefault();


		var form = $('#categoryform');

		// getting data from form
		details.id = form.find('#id').val();

		details.name = form.find('#name').val();
		details.description= form.find('#description').val();

details=JSON.stringify(details);
this.props.postData(this.state.url,details);

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
 <li><Link to={`/tasks/${this.props.params.value}`}>Tasks</Link></li>
</ul>
</div>
<div className="container">
 <div className="row" id="row">

        <ReactDataGrid
          columns={columns}
          dataSource={this.state.url}
          idProperty='id'
          pagination={false}
          style={{height: 500}}
          />
            <Button bsStyle="primary" onClick={this.open.bind(this)}>ADD</Button>
            <div id="modal-wrapper" className="modal-wrapper">
            </div>
</div>
</div>
<Modal title='Modal title' show={this.state.showModal} onHide={this.close}>
<Modal.Header closeButton>
<Modal.Title>Add Category</Modal.Title>
</Modal.Header>
  <Modal.Body>
  <div>
  <form id ="categoryform" >
<div className="form-group">
<label>id</label>
<input type="text" className="form-control" id="id" />
</div>
<div className="form-group">
<label>name</label>
<input type="text" className="form-control" id="name" />
</div>
<div className="form-group">
<label>description</label>
<input type="text" className="form-control" id="description" />
</div>



</form>
</div>
  </Modal.Body>
    <Modal.Footer>
<Button bsStyle="primary" onClick={this._saveCategory.bind(this)}>Add categories</Button>
<Button bsStyle="danger" onClick={this.close.bind(this)}>Cancel</Button>
</Modal.Footer>
</Modal>

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
        fetchData: (url) => dispatch(categoriesFetchData(url)),
        postData: (url,details) => dispatch(categoriesPostData(url,details))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Categories);

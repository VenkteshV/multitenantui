import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { itemsFetchData } from '../actions/items';
import {Link} from 'react-router';

class ItemList extends Component {
    componentDidMount() {
        this.props.fetchData('http://dq.lvh.me:3000/clients');

    }

    render() {
        if (this.props.hasErrored) {
            return <p>Sorry! There was an error loading the items</p>;
        }

        if (this.props.isLoading) {
            return <p>Loading…</p>;
        }

        return (
          <div className ="container">
  <nav className ="navbar navbar-default">
  <div className ="container-fluid">
  <div className ="navbar-header">
  <a className ="navbar-brand" href="#">ACES </a>
  </div>
          <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
            <ul className="nav navbar-nav">
                {this.props.items.map((item) => (

                    <li key={item.id}>
                    <Link to={`/datagrid/${item.subdomain}`}> {item.name}</Link>

                    </li>


                ))}
            </ul>
            </div>
            </div>
    </nav>
    </div>

        );
    }
}

ItemList.propTypes = {
    fetchData: PropTypes.func.isRequired,
    items: PropTypes.array.isRequired,
    hasErrored: PropTypes.bool.isRequired,
    isLoading: PropTypes.bool.isRequired
};

const mapStateToProps = (state) => {
    return {
        items: state.items,
        hasErrored: state.itemsHasErrored,
        isLoading: state.itemsIsLoading
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        fetchData: (url) => dispatch(itemsFetchData(url))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(ItemList);

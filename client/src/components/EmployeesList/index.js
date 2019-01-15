import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchItems } from '../../redux/actions';
import SingleEmployee from '../SingleEmployee';

class EmployeesList extends Component {
  componentDidMount() {
    this.props.fetchData();
  }

  handleButtonClick() {
    this.props.fetchData();
  }

  render() {
    const { items, hasErrored, isLoading } = this.props;
    if (isLoading) return <p>Loading...</p>;
    if (hasErrored)
      return (
        <button onClick={() => this.handleButtonClick()}>
          Error! Try again?
        </button>
      );
    return items.map(employee => (
      <SingleEmployee singleEmployee={employee} key={employee.uuid} />
    ));
  }
}

const mapStateToProps = state => {
  return {
    items: state.items,
    hasErrored: state.itemsHasErrored,
    isLoading: state.itemsIsLoading
  };
};

const mapDispatchToProps = dispatch => {
  return {
    fetchData: () => dispatch(fetchItems())
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(EmployeesList);

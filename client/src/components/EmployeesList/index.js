import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchItems } from '../../redux/actions';
import SingleEmployee from '../SingleEmployee';
import { List, Button, Wrapper, InfoText } from './styles';

class EmployeesList extends Component {
  componentDidMount() {
    this.props.fetchData();
  }

  handleButtonClick() {
    this.props.fetchData();
  }

  render() {
    const { items, hasErrored, isLoading } = this.props;

    if (isLoading)
      return (
        <Wrapper>
          <InfoText>Loading...</InfoText>
        </Wrapper>
      );
    if (hasErrored)
      return (
        <Wrapper>
          <Button onClick={() => this.handleButtonClick()}>
            <InfoText>Error! Try again?</InfoText>
          </Button>
        </Wrapper>
      );
    return (
      <List>
        {items.map(employee => (
          <SingleEmployee singleEmployee={employee} key={employee.uuid} />
        ))}
        ;
      </List>
    );
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

import React, { Component } from 'react';

class EmployeesList extends Component {
  state = {
    data: [],
    hasErrored: false,
    isLoading: false
  };

  fetchFromAPI = async () => {
    this.setState({ hasErrored: false, isLoading: true });
    const url =
      'https://cors-anywhere.herokuapp.com/http://hiring.rewardgateway.net/list';
    const options = {
      method: 'GET',
      headers: new Headers({
        Authorization: 'Basic aGFyZDpoYXJk'
      })
    };
    await fetch(url, options)
      .then(res => {
        if (!res.ok) throw res;
        return res.json();
      })
      .then(res => {
        this.setState({ data: res });
      })
      .catch(err => {
        this.setState({ hasErrored: true });
        console.log('ERROR! Code ', err.status);
      });
    this.setState({ isLoading: false });
  };

  componentDidMount() {
    this.fetchFromAPI();
  }

  render() {
    const { hasErrored, isLoading, data } = this.state;

    if (isLoading) return <p>Loading...</p>;
    if (hasErrored) return <p>Error! Try again!</p>;
    return (
      <ul>
        {data.map(item => (
          <li key={item.uuid}>
            <img src={item.avatar} alt={item.name} />
            <h3>{item.name}</h3>
            <h4>{item.title}</h4>
            <p>{item.company}</p>
            <span>{item.bio}</span>
          </li>
        ))}
      </ul>
    );
  }
}

export default EmployeesList;

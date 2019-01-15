import React from 'react';
import PropTypes from 'prop-types';

function SingleEmployee(props) {
  const employee = props.singleEmployee;
  return (
    <ul>
      <li key={employee.uuid}>
        <img src={employee.avatar} alt={employee.name} />
        <h3>{employee.name}</h3>
        <h4>{employee.title}</h4>
        <p>{employee.company}</p>
        <span>{employee.bio}</span>
      </li>
    </ul>
  );
}

SingleEmployee.propTypes = {
  singleEmployee: PropTypes.object.isRequired
};

export default SingleEmployee;

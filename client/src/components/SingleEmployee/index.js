import React from 'react';
import PropTypes from 'prop-types';
import Centre from './styles';

function SingleEmployee(props) {
  const employee = props.singleEmployee;
  return (
    <Centre>
      <ul>
        <li key={employee.uuid}>
          <img src={employee.avatar} alt={employee.name} />
          <h3>{employee.name}</h3>
          <h4>{employee.title}</h4>
          <em>{employee.company}</em>
          <span>{employee.bio}</span>
        </li>
      </ul>
    </Centre>
  );
}

SingleEmployee.propTypes = {
  singleEmployee: PropTypes.object.isRequired
};

export default SingleEmployee;

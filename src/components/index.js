import React from 'react';
import PropTypes from 'prop-types';

class CampSite extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <Camper />
      </div>
    );
  }
};

class Camper extends React.Component {
  render() {
    return (
      <div>
        <p>{this.props.name}</p>
      </div>
    );
  }
}

// Assign default props to Camper component
Camper.defaultProps = {
  name: 'CamperBot'
};

// Define propTypes for Camper component
Camper.propTypes = {
  name: PropTypes.string.isRequired
};


import React from 'react';

class MyComponent extends React.Component {
  constructor(props) {
    super(props);
  }

  componentWillMount() {
    console.log('Component is about to be mounted to the DOM.');
  }

  render() {
    return <div />;
  }
}

export default MyComponent;

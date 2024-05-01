class MyComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      visibility: false
    };
    // Bind the method to the class
    this.toggleVisibility = this.toggleVisibility.bind(this);
  }

  // Method to toggle visibility
  toggleVisibility() {
    this.setState(prevState => ({
      visibility: !prevState.visibility
    }));
  }

  render() {
    if (this.state.visibility) {
      return (
        <div>
          <button onClick={this.toggleVisibility}>Click Me</button>
          <h1>Now you see me!</h1>
        </div>
      );
    } else {
      return (
        <div>
          <button onClick={this.toggleVisibility}>Click Me</button>
        </div>
      );
    }
  }
}

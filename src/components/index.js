
class MyComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      text: "Hello"
    };
    // Binding the handleClick method to the current instance
    this.handleClick = this.handleClick.bind(this);
  }

  // Define the handleClick method to update the state
  handleClick() {
    this.setState({
      text: 'You clicked!'
    });
  }

  render() {
    return (
      <div>
        {/* Button with onClick handler calling the handleClick method */}
        <button onClick={this.handleClick}>Click Me</button>
        {/* Display the current text from state */}
        <p>{this.state.text}</p>
      </div>
    );
  }
}
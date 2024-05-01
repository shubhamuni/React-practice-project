class ControlledInput extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      input: ''
    };
    // Bind the method to the class
    this.handleChange = this.handleChange.bind(this);
  }

  // Method to handle input change
  handleChange(event) {
    this.setState({
      input: event.target.value
    });
  }

  render() {
    return (
      <div>
        { /* Input element */}
        <input 
          value={this.state.input} 
          onChange={this.handleChange} 
        />

        <h4>Controlled Input:</h4>
        <p>{this.state.input}</p>
      </div>
    );
  }
}

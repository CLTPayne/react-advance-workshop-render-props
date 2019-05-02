import { Component } from "react";

class Fetch extends Component {
  state = {
    loading: false,
    data: null,
    error: null
  };

  async componentDidMount() {
    try {
      this.setState({ loading: true });
      let response = await fetch(this.props.url);
      response = await response.json();
      this.setState({ data: response });
    } catch (error) {
      this.setState({ error });
    } finally {
      this.setState({ loading: false });
    }
  }

  render() {
    return this.props.render({ ...this.state });
  }
}

export default Fetch;

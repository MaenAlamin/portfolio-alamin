import React from "react";
import BaseLayout from "../components/layouts/BaseLayout";
import axios from "axios";

class Index extends React.Component {
  static async getInitialProps() {
    let userData = {};
    try {
      const response = await axios.get("https://jsonplaceholder.typicode.com/todos/1");
      userData = response.data;
    } catch (err) {
      console.error(err);
    }

    return { initialData: [1, 2, 3, 4], userData };
  }

  constructor() {
    super();
    this.state = {
      title: "i am index page"
    };
    console.log("constructor");
  }

  componentDidMount() {
    console.log("componentDidMount");
  }

  componentDidUpdate() {
    console.log("componentDidUpdate");
  }

  componentWillUnmount() {
    console.log("componentWillUnmount");
  }

  updateTitle() {
    this.setState({ title: "i am an updated index page" });
  }

  render() {
    const { title } = this.state;
    const { userData, initialData } = this.props;

    return (
      <BaseLayout>
        <h1>This is the Index Page from Class Component</h1>
        <h2>{this.state.title}</h2>
        <h2>{userData.title}</h2>
        <button onClick={() => this.updateTitle()}>Change the title</button>
      </BaseLayout>
    );
  }
}

export default Index;

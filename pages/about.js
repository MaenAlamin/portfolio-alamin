import React from "react";
import BaseLayout from "../components/layouts/BaseLayout";
import BasePage from "../components/BasePage";

class About extends React.Component {
  render() {
    return (
      <BaseLayout {...this.props.auth}>
        <BasePage className="about-page">
          <h1>This is the About Page</h1>
        </BasePage>
      </BaseLayout>
    );
  }
}

export default About;

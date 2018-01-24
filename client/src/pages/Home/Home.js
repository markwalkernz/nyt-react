import React, { Component } from "react";
import Search from "../../components/Search";
import Results from "../../components/Results";

class Home extends Component {
  // Initialize this.state.articles as an empty array
  state = {
    articles: []
  };

  render() {
    return (
      <div>
      	<Search />
      	<Results />
      </div>
    );
  }
}

export default Home;

import React, { Component } from "react";
import SavedArticles from "../../components/SavedArticles";

class Saved extends Component {
  // Initialize this.state.savedArticles as an empty array
  state = {
    savedArticles: []
  };

  render() {
    return (
      <div>
      	<SavedArticles />
      </div>
    );
  }
}

export default Saved;
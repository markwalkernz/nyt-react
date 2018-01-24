import React from "react";
import Article from "../Article";

const SavedArticles = () =>
  <div className="panel panel-default">
    <div className="panel-heading text-center">
      <h2>Saved Articles</h2>
    </div>
    <div className="panel-body">
      <Article />
    </div>
  </div>;

export default SavedArticles;
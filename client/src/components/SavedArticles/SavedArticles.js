import React from "react";
import SavedArticle from "../SavedArticle";

const SavedArticles = () =>
  <div className="panel panel-default">
    <div className="panel-heading text-center">
      <h2>Saved Articles</h2>
    </div>
    <div className="panel-body">
      <SavedArticle />
    </div>
  </div>;

export default SavedArticles;
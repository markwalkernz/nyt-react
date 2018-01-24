import React from "react";

const Article = props =>
  <div className="panel panel-default">
    <div className="panel-body">
      <p><strong>{props.headline}</strong></p>
      <p>Publication Date: {props.pubdate}</p>
      <a rel="noreferrer noopener" href={props.url} target="_blank">Go to article</a>
    </div>
  </div>;

export default Article;
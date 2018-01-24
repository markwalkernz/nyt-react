import React, { Component } from "react";
import {Input, FormBtn} from "../../components/Form";
import Article from "../../components/Article";
import API from "../../utils/API";

class Home extends Component {
  // Initial state
  state = {
    articles: [],
    topic: "",
    startYear: "",
    endYear: ""
  };

  handleInputChange = event => {
    // get the name and value from event.target
    // set state with new value
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

  handleFormSubmit = event => {
    // When the form is submitted, prevent its default behavior and get articles
    event.preventDefault();

    console.log(this.state);

    const searchTerms = {
      topic: this.state.topic,
      startYear: this.state.startYear,
      endYear: this.state.endYear
    }

    API.getNewArticles(searchTerms)
      .then(res => {this.setState({ articles: res.data.docs })
          console.log("new articles obtained");
          console.log(this.state.articles);
        })
      .catch(err => console.log(err));
  };

  render() {
    return (
      <div>
        <div className="panel panel-default">
          <div className="panel-heading text-center">
            <h2>Search</h2>
          </div>
          <div className="panel-body">

            <form>        
              <Input
                name="topic"
                value={this.state.topic}
                onChange={this.handleInputChange}
                placeholder="Topic" />
              
              <Input
                name="startYear"
                value={this.state.startYear}
                onChange={this.handleInputChange}
                placeholder="Start Year" />
              
              <Input
                name="endYear"
                value={this.state.endYear}
                onChange={this.handleInputChange}
                placeholder="End Year" />

              <FormBtn onClick={this.handleFormSubmit}>Search</FormBtn>

            </form>

          </div>
        </div>

        <div className="panel panel-default">
          <div className="panel-heading text-center">
            <h2>Results</h2>
          </div>
          <div className="panel-body">
            {!this.state.articles.length ? (
                <h1 className="text-center">No Recipes to Display</h1>
              )
              : (<div>
                {this.state.articles.map(article => {
                  return(<Article 
                          key={article._id}
                          headline={article.headline.main}
                          pubdate={article.pub_date}
                          url={article.web_url} />)
                })}
              </div>)}
          </div>
        </div>

      </div>
    )
  }
}

export default Home;

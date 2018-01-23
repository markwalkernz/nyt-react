import React, { Component } from "react";
import Jumbotron from "../../components/Jumbotron";
import SaveBtn from "../../components/SaveBtn";
import { Col, Row, Container } from "../../components/Grid";
import { List, ListItem } from "../../components/List";
import { Input, FormBtn } from "../../components/Form";
import API from "../../utils/API";

class Home extends Component {
  // Initialize this.state.articles as an empty array
  state = {
    articles: []
  };

  // Add code here to get all books from the database and save them to this.state.articles
  // componentDidMount () {
  //   API.getArticles()
  //   .then((res) => {
  //     console.log(res);
  //     this.setState({ articles: res.data });
  //   });
  // };

  render() {
    return (
      <Container fluid>
        <Row>
          <Col size="md-6">
            <Jumbotron>
              <h1>Search Form</h1>
            </Jumbotron>
            <form>
              <Input name="topic" placeholder="Topic" />
              <Input name="startYear" placeholder="Start Year" />
              <Input name="endYear" placeholder="End Year" />
              <FormBtn>Search</FormBtn>
            </form>
          </Col>
          <Col size="md-6 sm-12">
            <Jumbotron>
              <h1>Results</h1>
            </Jumbotron>
            {this.state.articles.length ? (
              <List>
                {this.state.articles.map(book => (
                  <ListItem key={article._id}>
                    <a href={"/articles/" + article._id}>
                      <strong>
                        {article.title} {article.date} {article.url}
                      </strong>
                    </a>
                    <SaveBtn />
                  </ListItem>
                ))}
              </List>
            ) : (
              <h3>No Results to Display</h3>
            )}
          </Col>
        </Row>
      </Container>
    );
  }
}

export default Home;

import axios from "axios";

export default {
  // The getNewArticles method retrieves new articles from the server
  // It accepts search terms
  getNewArticles: function(searchTerms) {
    console.log("getNewArticles method hit");
    console.log(searchTerms);

    return axios.get("/api/newArticles", { params: searchTerms});
  },

  // // Gets articles
  // getArticles: function() {
  //   return axios.get("/api/articles");
  // },
  // // Gets the article with the given id
  // getArticle: function(id) {
  //   return axios.get("/api/articles/" + id);
  // },
  // // Deletes the article with the given id
  // deleteArticle: function(id) {
  //   return axios.delete("/api/articles/" + id);
  // },
  // // Saves an article to the database
  // saveBook: function(ArticleData) {
  //   return axios.post("/api/articles", articleData);
  // }
};
import axios from "axios";

const API = {
  runQuery: function(searchterm) {

    console.log(searchterm);

    var queryURL = "https://api.nytimes.com/svc/search/v2/articlesearch.json?api-key=" + authKey + "&q=" + searchterm;
    var articleCounter = 0;

      for (var i = 0; i < 5; i++) {
        return axios.get(queryURL).then(function(response) {
          if (response.data.results[i]) {
          return response.data.results[i].formatted;
        }
        return "no results found";
      });
    }
  },
  getArticles: function() {
    return axios.get("/api/articles");
  },
  // savedArticle: function(text) {
  //   return axios.post("/api/articles", { text });
  // },
  deleteArticle: function(id) {
    return axios.delete(`/api/articles/${id}`);
  },
  saveArticle: function(article) {
    article.saved = !article.saved;
    const { _id, saved } = article;
    return axios.patch(`/api/articles/${_id}`, { saved });
  }
};

export default API;

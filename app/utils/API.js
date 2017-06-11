import axios from "axios";

const API = {
  runQuery: function(searchterm, response) {
  
    console.log(searchterm);
    var authKey = "b9f91d369ff59547cd47b931d8cbc56b:0:74623931";
    var queryURL = "https://api.nytimes.com/svc/search/v2/articlesearch.json?api-key=" + authKey + "&q=" + searchterm;
    var articleCounter = 0;


        return axios.get(queryURL).then(function(response) {
          if (response.data) {
            var nytimes = response.data.response.docs;
            for (var i = 0; i < 5; i++) {


            console.log(nytimes[i].headline.main);
            console.log(nytimes[i].snippet);
            console.log(nytimes[i].pub_date);
            console.log(nytimes[i].web_url);

            }

          return nytimes;
        }
        return "no results found";
      });

  },
  postArticles: function(searchterm) {
  return axios.post("/api", { title: title, text: text, date: date, url: ur});
  },
  getArticles: function() {
    return axios.get("/api");
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

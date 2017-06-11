import axios from "axios";

const API = {
  runQuery: function(searchterm) {

    console.log(searchterm);
    var authKey = "b9f91d369ff59547cd47b931d8cbc56b:0:74623931";
    var queryURL = "https://api.nytimes.com/svc/search/v2/articlesearch.json?api-key=" + authKey + "&q=" + searchterm;
    var counter = 0;
    var results = [];

        return axios.get(queryURL).then(function(response) {
          if (response.data) {
            var nytimes = response.data.response.docs;
            for(var i = 0; i < nytimes.length; i++){

					if(counter > 4) {
						return results;
					}

					if(nytimes[counter].headline.main && nytimes[counter].pub_date && nytimes[counter].web_url && nytimes[counter].snippet) {
						results.push(nytimes[counter]);
						counter++;
					}
				}
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

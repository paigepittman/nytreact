import axios from "axios";

var authKey = "b9f91d369ff59547cd47b931d8cbc56b:0:74623931";

var helper = {

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

  // This function hits our own server to retrieve the record of query results
  getHistory: function() {
    return axios.get("/api");
  },

  // This function posts new searches to our database.
  postHistory: function(searchterm) {
    return axios.post("/api", { location: location });
  }
};

// We export the API helper
module.exports = helper;

import React, { Component } from "react";
// import Panel from "./children/Panel";
// import API from "../../utils/API";

class Saved extends Component {
  constructor() {
    super();
    this.state = {
      articles: [] }
      this.getArticle = this.getArticle.bind(this);


  }
  componentDidMount() {
    this.getArticle();
  }
  getArticle() {
    API.getArticle().then((res) => {
      const favoriteArticle = res.data.filter(article => article.favorited);
      this.setState({ articles: favoriteArticle });
    });
  }
  renderArticle() {
    return this.state.articles.map(article => (
      //<panel>
        // article={article},
        // key={article._id},
        // getArticle={this.getArticle}
        <div>
          {article}
        </div>
    ));
  }
  render() {
    return (
      <div>
        <div className="jumbotron text-center">
          <h1>Your Favorite Article</h1>
          <p>Your very best articles.</p>
        </div>
        <div className="container">
        <div className="row">
          {this.renderArticle()}
        </div>
        </div>
      </div>
    );
  }
}

export default Saved;

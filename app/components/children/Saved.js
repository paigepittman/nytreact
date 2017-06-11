import React, { Component } from "react";
import API from "../../utils/API";

class Saved extends Component {
  constructor() {
    super();
    this.state = {
      articles: [] }
      this.getArticles = this.getArticles.bind(this);


  }
  componentDidMount() {
    this.getArticles();
  }
  getArticles() {
    API.getArticles().then((res) => {
      const savedArticle = res.data.filter(article => article.saved);
      this.setState({ articles: savedArticle });
    });
  }
  renderArticles() {
    return this.state.articles.map(article => (
        article={article}
        // key={article._id},
        // getArticle={this.getArticle}

    ));
  }
  render() {
    return (
      <div>
        <div className="jumbotron text-center">
          <h3>Saved Articles</h3>

        </div>
        <div className="container">
        <div className="row">
          {this.renderArticles()}
        </div>
        </div>
      </div>
    );
  }
}

export default Saved;

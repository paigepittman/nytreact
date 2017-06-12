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
    console.log("GET ARTICLES");
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
      <div className="panel panel-success">
				<div className="panel-heading">
					<h3 className="panel-title text-center"><strong>Saved Articles</strong></h3>
				</div>
				<div className="panel-body">
          {this.renderArticles()}
        </div>
      </div>
    );
  }
}

export default Saved;
